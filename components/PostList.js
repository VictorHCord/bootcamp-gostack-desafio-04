import React , { Component } from 'react';
import AllPost from './AllPost';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://pickaface.net/gallery/avatar/20151107_070622_3057_aleatorio.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://pickaface.net/gallery/avatar/20151107_070622_3057_aleatorio.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Victor Cordeiro",
          avatar: "https://pickaface.net/gallery/avatar/20151107_070622_3057_aleatorio.png"
        },
        date: "04 novembro 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Leonardo Fernandes",
              avatar: "https://pickaface.net/gallery/avatar/20151107_070622_3057_aleatorio.png"
            },
            content: "Conteúdo do comentário"
          }
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