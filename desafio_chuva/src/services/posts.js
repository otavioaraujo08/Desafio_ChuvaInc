// Importando as Funções da API
import useApi from 'src/composable/UseApi'

// Declarando nossos métodos
export default function postsService () {
  const { list, post, update, remove } = useApi('posts')

  return {
    list, post, update, remove
  }
}
