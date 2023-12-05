import { ref, onValue, set, remove, get } from "firebase/database";
import { firebase_db, auth } from '../src/Firebaseconfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

async function cadastrarUsuarioFunc(nome, email, senha, birthday) { //Funcao para cadastrar usuário, email tem que ser unico
  return new Promise(async (resolve, reject) => {
    if (nome !== '' & email !== '' & senha !== '') {
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          set(ref(firebase_db, 'usuarios/' + userCredential.user.uid), {
            username: nome,
            email: email,
            senha: senha,
            birthday: birthday
          });
          console.log('true')
          alert("Usuário registrado com sucesso!\nUID: " + userCredential.user.uid)
          resolve(1);
        }).catch((error) => {
          alert('Erro ao cadastrar usuário:\n' + error);  // Logar o erro no console
          resolve(0);
        })
    } else {
      alert("PREENCHA TODOS OS DADOS CORRETAMENTE!")
      return false;
    }
  });
}

async function logarUsuarioFunc(email, senha) { //Verifica os credenciais do usuário no banco, retorna "user" se existente
  return new Promise(async (resolve, reject) => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user.uid
        console.log(user)
        resolve(user)
      }).catch((error) => {
        alert('Erro ao logar usuário:\n' + error);  // Logar o erro no console
        resolve(1);
      })
  });
}

async function alternarFavoritoFunc(secao, pokemon_id, pokemon_name) { //Adiciona um pokemon a lista de favoritos do usuário, pode ser expandido facilmente
  if (pokemon_name !== '' && pokemon_id !== '') {
    await set(ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/' + pokemon_id), {
      pokemon: pokemon_name,
    });
    console.log("Pokemon inserido com sucesso!");
    alert("Pokemon '" + pokemon_name + "' adicionado aos favoritos com sucesso!")
  } else {
    console.error("pokemon_name e pokemon_id não podem ser vazios");
  }
}

function obterListaFavoritos(secao) {
  return new Promise(async (resolve, reject) => {
    try {
      const favoritosRef = ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/');

      onValue(favoritosRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const listaFavoritos = Object.keys(data).map((pokemon_id) => ({
            id: pokemon_id,
            ...data[pokemon_id],
          }));
          resolve(listaFavoritos);
        } else {
          resolve([]);
        }
      });
    } catch (error) {
      console.error("Erro ao obter lista de favoritos:" + error);
      reject(error);
    }
  });
}


function verificarFavoritoFunc(secao, pokemon_id, pokemon_name) { //verifica se existe o pokemon declarado na lista de fav do usuário
  return new Promise(async (resolve, reject) => {
    try {
      if (pokemon_name !== '' && pokemon_id !== '') {
        const verificar = ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/' + pokemon_id + '/');
        const snapshot = await get(verificar);
        const data = snapshot.val();

        console.log('verificarFavoritoFunc -> Dados ->' + data);

        if (data === null) {
          console.log(1);
          resolve(1);
        } else {
          console.log(2);
          resolve(2);
        }
      } else {
        console.error("Os dados pokemon_name e pokemon_id não podem ser vazios!");
        reject(new Error("Valores inválidos"));
      }
    } catch (error) {
      console.error("Erro ao obter snapshot:" + error);
      reject(error);
    }
  });
}


function validarSecao(secao) { //verifica se existe o pokemon declarado na lista de fav do usuário
  return new Promise(async (resolve, reject) => {
    try {
      if (pokemon_name !== '' && pokemon_id !== '') {
        const verificar = ref(firebase_db, 'usuarios/' + secao + '/');
        const snapshot = await get(verificar);
        const data = snapshot.val();

        console.log('oia aqui ====> ' + data);

        if (data === null) {
          console.log(1);
          resolve(1);
        } else {
          console.log(2);
          resolve(2);
        }
      } else {
        console.error("pokemon_name e pokemon_id não podem ser vazios");
        reject(new Error("Valores inválidos"));
      }
    } catch (error) {
      console.error("Erro ao obter snapshot:", error);
      reject(error);
    }
  });
}

async function excluirPokemonFavFunc(secao, pokemon_id, pokemon_name) { //exclui o pokemon da lista de fav do usuário
  try {
    if (pokemon_name !== '' && pokemon_id !== '') {
      const verificar = await ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/' + pokemon_id + '/');
      const snapshot = await get(verificar);
      const datajaexiste = snapshot.val();

      if (datajaexiste !== null) {
        await remove(ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/' + pokemon_id));
        console.log("Dados excluídos com sucesso!");
      } else {
        console.log("Os dados não existem para excluir.");
      }
    }
  } catch (error) {
    console.error("Erro ao excluir dados:", error);
  }
}  

async function exibirFavoritoFunc(secao) { //exibe os fav do usuário
  const verificar = await ref(firebase_db, 'usuarios/' + secao + '/pokemons_fav/');
  onValue(verificar, (snapshot) => {
    var datajaexiste = snapshot.val();
  });
}

async function exibirEmail(secao) { //exibe email do usuário
  return new Promise(async (resolve, reject) => {
    const verificar = await ref(firebase_db, 'usuarios/' + secao + '/email/');
    onValue(verificar, (snapshot) => {
      var datajaexiste = snapshot.val();
      resolve(datajaexiste)
    });
  });
}

async function exibirNome(secao) { //exibe o nome do usuário
  return new Promise(async (resolve, reject) => {
    const verificar = await ref(firebase_db, 'usuarios/' + secao + '/username/');
    onValue(verificar, (snapshot) => {
      var datajaexiste = snapshot.val();
      resolve(datajaexiste)
    });
  });
}

async function exibirBirthday(secao) { //exibe data de nascimento do usuário
  return new Promise(async (resolve, reject) => {
    const verificar = await ref(firebase_db, 'usuarios/' + secao + '/birthday/');
    onValue(verificar, (snapshot) => {
      var datajaexiste = snapshot.val();
      resolve(datajaexiste)
    });
  });
}

export { obterListaFavoritos, cadastrarUsuarioFunc, logarUsuarioFunc, alternarFavoritoFunc, exibirFavoritoFunc, verificarFavoritoFunc, excluirPokemonFavFunc, validarSecao, exibirEmail, exibirNome, exibirBirthday };