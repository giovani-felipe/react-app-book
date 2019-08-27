const URL = "http://localhost:8000/api"

const REQUEST = {
  GET: (path) => fetch(`${URL}${path}`).then(res => res.json()),
  POST: ({ path, body }) =>
    fetch(`${URL}${path}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(res => res.json()),
  PATH: ({ path, body }) =>
    fetch(`${URL}${path}`,
      {
        method: 'PATH',
        headers: { 'Content-Type': 'application/json' },
        body
      }).then(res => res.json()),
  DELETE: (path) =>
    fetch(`${URL}${path}`,
      { method: 'DELETE' })
      .then(res => res.json())
}

const ApiService = {
  ListaAutores: () => REQUEST.GET('/autor'),
  ListaLivros: () => REQUEST.GET('/autor/livro'),
  ListaAutorNomes: () => REQUEST.GET('/autor/nome'),
  ListaAutorId: id => REQUEST.GET(`/autor/${id}`),
  AdicionaAutor: autor => REQUEST.POST({ path: '/autor', body: autor }),
  AlteraAutor: autor => REQUEST.PATH(`/autor/${autor.id}`),
  RemoveAutor: id => REQUEST.DELETE(`/autor/${id}`)
};

export default ApiService;