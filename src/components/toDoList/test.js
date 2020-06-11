import githubApi from 'github-api'

function test () {
    
    const gh = new githubApi({
        username: 'Rextens',
        password: "ReXiO1pl!"
    });
    let gist = gh.getGist();

    gist.create({
        public: true,
        description: 'auto created gist',
        files: {
            "file1.txt": {
                content: "Aren't gists great!"
             }
        }
    })
    
    let gist2 = gh.getGist('68088fcabe59f8d26596268dc1198585455220b1');
    console.log(gist2);
}

export default test;