// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = 'premium';

switch(user){
    case 'free': 
    console.log('acesso limitado');
    break;
    case 'premium':
    console.log('acesso total ao app');
    break;
    case 'super premium':
    console.log('acesso total ao app e bônus');
    break;
}