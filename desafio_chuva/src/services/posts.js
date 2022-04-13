// Importando as Funções da API
import useApi from 'src/composable/UseApi'

// Declarando nossos métodos
export default function postsService () {
  const { list, getById, post, update, remove } = useApi('posts')

  return {
    list, getById, post, update, remove
  }
}
