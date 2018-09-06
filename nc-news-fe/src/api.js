const DB_URL = 'https://jan-nc-news.herokuapp.com/api';

export const fetchArticles = () => {
  return fetch(`${DB_URL}/articles`)
    .then(res => res.json())
}

export const fetchTopicArticles = (topic) => {
  return fetch(`${DB_URL}/topics/${topic}/articles`)
    .then(res => res.json())
}

export const fetchTopics = () => {
  return fetch(`${DB_URL}/topics`)
    .then(res => res.json())
}

export const fetchComments = (articleId) => {
  return fetch(`${DB_URL}/articles/${articleId}/comments`)
    .then(res => res.json())
}

export const fetchUser = (username) => {
  return fetch(`${DB_URL}/users/${username}`)
    .then(res => res.json())
}

export const addComment = (articleId, userId, comment) => {
  const bodyObj = {
    body: comment,
    created_by: userId }
  return fetch(`${DB_URL}/articles/${articleId}/comments`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyObj)
  })
  .then(res => res.json())
}

export const addArticle = ({topic, body, title}, userId) => {
  const bodyObj = {
    body,
    title,
    created_by: userId
  }
  fetch(`${DB_URL}/topics/${topic}/articles`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyObj)
  })
}

export const updateVotes = (category, id, vote) => {
  return fetch(`${DB_URL}/${category}/${id}?vote=${vote}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}