import fetch from 'isomorphic-fetch'
// temp const
export const SELECT_THREAD = 'SELECT_THREAD'
export const INVALIDATE_THREAD = 'INVALIDATE_THREAD'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// Подписка на обновление?
export function selectThread(thread) {
  return {
    type: SELECT_THREAD,
    thread
  }
}
// nuff said
export function invalidateThread(thread) {
  return {
    type: INVALIDATE_THREAD,
    thread
  }
}
// Когда нужно фетчить посты треда  = request 
export function requestPosts(thread) {
  return {
    type: REQUEST_POSTS,
    thread
  }
}
// Получение постов треда
export function receivePosts(thread, json) {
  return {
    type: RECEIVE_POSTS,
    thread,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(thread) {
    return function (dispatch) {
        dispatch(requestPosts(thread))
         return fetch(`http://www.reddit.com/r/${thread}.json`)
            .then(response => response.json())
                .then(json =>
                   dispatch(receivePosts(thread, json)))
 }
}

function shouldFetchPosts(state, thread) {
  const posts = state.postsInThread[thread]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(thread) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), thread)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchPosts(thread))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}