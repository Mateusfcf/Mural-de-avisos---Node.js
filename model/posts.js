module.exports = {
    posts: [],

    getALL() {
        return this.posts;
    },

    newPost(titulo, descricao) {
        this.posts.push({ id: gerarID(), titulo, descricao });
    },
}

function gerarID() {
    return Math.random().toString(36).substring(2, 9);
}