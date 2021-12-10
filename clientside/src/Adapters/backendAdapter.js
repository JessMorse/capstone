import axios from "axios";

///Donations

const getAllDonations = () => {
    axios.get("http://localhost:8080/donations")
    .then(response => {
        return response.data
    })
}

const getDonationByUserId = (id) => {
    axios.get("http://localhost:8080/donations/" + id)
    .then(response => {
        return response.data
    })
}

const addDonation = (donation) => {
    return(
    axios.post("http://localhost:8080/donations/", donation)
    ).catch((e) => {
        console.log("backend adapter could not add donation")
    })
        
}

const updateDonation = (id, donation) => {
    return(
    axios.put("http://localhost:8080/donations/" + id, donation)
    ).catch((e) => {
        console.log("backend adapter could not update donation")
    })
}


//hubs

const getAllHubs = () => {
    axios.get("http://localhost:8080/hub")
    .then(response => {
        return response.data
    })
}


const getHubsById = (id) => {
    axios.get("http://localhost:8080/hub/" + id)
    .then(reposnse => {
        return response.data
    })
}

const updateHub = (id, hub) => {
    return(
        axios.put("http://localhost:8080/hub/" + id, hub)
    ).catch((e) => {
        console.log("backend adapter could not update hub")
    })

}

const addHub = (hub) => {
    return(
        axios.post("http://localhost:8080/hub", hub)
    ).catch((e) => {
        console.log("backend adapter could not add hub")
    })
}



//post

const getAllPosts = () => {
    return(
        axios.get("http://localhost:8080/post/")
        .then(response => {
            return response.data
        })
    )
}

const addNewPost = (post) => {
    return(
       axios.post('"http://localhost:8080/post/"', post)
    ).catch((e) => {
        console.log("backend adapter could not add post")
    })
}

const updatePost = (post) => {
    return(
        axios.put("http://localhost:8080/post/", post)
    ).catch((e) => {
        console.log("backend adapter could not update post")
    })
}


//requests

const getAllRequests = () => {
    axios.get("http://localhost:8080/request")
    .then(response => {
        return response.data
    })
}

const getRequestById = (id) => {
    axios.get("http://localhost:8080/request" + id)
    .then(response => {
        return response.data
    })
}

const addNewRequest = (request) => {
    return(
       axios.post("http://localhost:8080/request",request)
    ).catch((e) => {
        console.log("backend adapter could not add request")
    })
}

const updateRequest = (id, request) => {
    return(
        axios.put("http://localhost:8080/request" + id, request)
    ).catch((e) => {
        console.log("backend adapter could not update request")
    })
}






//users
const getAllUsers = () => {
    axios.get("http://localhost:8080/user")
    .then(response => {
        return user.data
    })
}

const addNewUser = (user) => {
    return(
       axios.post("http://localhost:8080/user",user)
    ).catch((e) => {
        console.log("backend adapter could not add user")
    })
}

const updateUser = (user) => {
    return(
        axios.put("http://localhost:8080/user", user)
    ).catch((e) => {
        console.log("backend adapter could not update user")
    })
}

const getUserById = (id) => {
    axios.get("http://localhost:8080/user" + id)
    .then(response => {
        return response.data
    })
}
