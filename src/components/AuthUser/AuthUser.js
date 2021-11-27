function AuthUser() {
    const user = localStorage.getItem("authUser")
    if (user !== undefined) return JSON.parse(user)
    else return null
}

export default AuthUser
