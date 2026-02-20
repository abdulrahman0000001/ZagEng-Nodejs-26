function login() {
  return new Promise(resolve => {
    let user = {
      name: "user",
      id: 1
    }

    resolve(user)
  })
}

function getProfile(userId) {
  return new Promise(resolve => {
    let profile = {
      id: 1
    }
    resolve(profile)
  })
}

function getSettings(profile) {
  return new Promise(resolve => {
    let settings = {
      test: "test"
    }
    resolve(settings)
  })
}

login()
  .then(user => getProfile(user.id))
  .then(profile => getSettings(profile))
  .then(settings => console.log(settings))
/////////////////////////////////////////////////////////////////////////////////



async function login() {

  let user = {
    name: "user",
    id: 1
  }

  return user
}

async function getProfile(userId) {

  let profile = {
    id: 1
  }
  return profile

}

async function getSettings(profile) {

  let settings = {
    test: "test"
  }
  return settings

}

async function f() {
  let user = await login();
  let profile = await getProfile(user.id)
  let settings = await getSettings(profile)
  console.log(settings)
}
f()
