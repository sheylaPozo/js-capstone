import Api from './api';

export default class Comment {
  static generateForm() {
    const form = document.createElement('form');
    const usernameInput = document.createElement('input');
    const commentInput = document.createElement('input');
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('id', 'comment-btn');
    commentBtn.classList.add('red');
    usernameInput.type = 'text';
    commentInput.type = 'text';
    commentBtn.innerHTML = 'Comment';
    form.append(usernameInput, commentInput, commentBtn);
    return form;
  }

  static manageEvents() {
    document.querySelector('#comment-btn').addEventListener('click', (event) => {
      event.preventDefault();
      const inputs = document.querySelectorAll('input[type="text"]');
      const username = inputs[0].value;
      const comment = inputs[1].value;
      const obj = { item_id: '333', username, comment };
      Api.postComment(obj);
    });
  }

  static addComment() {

  }

  static createComment(obj) {
    const p = document.createElement('p');
    p.innerHTML = `${obj.creation_date} ${obj.username}: ${obj.comment}`;
    return p;
  }

  static async loadComments(item_id = '333') {
    const div = document.createElement('div');
    await Api.getComments(item_id);
    Api.commentsData.forEach((obj) => {
      div.append(Comment.createComment(obj));
    });
    return div;
  }
}