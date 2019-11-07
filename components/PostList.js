import React , { Component } from 'react';
import AllPost from './AllPost';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Victor Cordeiro",
          avatar: "https://avatars3.githubusercontent.com/u/20667324?s=400&u=49c5b001d678d043462670b423164a6128430712&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Então bro, a rocketseat está sempre contratado, serio mesmo, uma boa parte da equipe da rocketseat é por ex alunos do bootcamp entra em contato lá no discord que eles te dão uma ajudinha."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Luiz Fernando",
          avatar: "https://avatars0.githubusercontent.com/u/32375042?s=400&v=4"
        },
        date: "04 novembro 2019",
        content: "E ae o projeto está ou não funcionando? hahaha quero logo testar isso ae",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Cara o projeto tá a mil, da uma olhada lá no repositorio tu vai curtir demais kk"
          },
          {
            id: 3,
            author: {
              name: "Victor Cordeiro",
              avatar: "https://avatars3.githubusercontent.com/u/20667324?s=400&u=49c5b001d678d043462670b423164a6128430712&v=4"
            },
            content : "Então cara to curtindo fazer esse projeto hahah ta divertido"
          }
        ]
      },

      {
        id: 3,
        author: {
          name: "Victor Cordeiro",
          avatar: "https://avatars3.githubusercontent.com/u/20667324?s=400&u=49c5b001d678d043462670b423164a6128430712&v=4"
        },
        date: "15 dezembro 2019",
        content: "Esse bootcamp está sensacional, as pessoas deveriam testar isto está ficando cada vez mais interessantes.",
        comments: [
          {
            id: 3,
            author: {
              name: "Luiz Fernando",
              avatar: "https://avatars0.githubusercontent.com/u/32375042?s=400&v=4"
            },
            content: "Oque está aprendendo agora lá cara? "
          },
          
        ]
      },


    ]
  };

  render() {
    const { posts } = this.state;   
    return (
      <>
        {posts.map(post => <AllPost key={post.id} post={post} />)}

      </>
    );
  }
}

export default PostList;