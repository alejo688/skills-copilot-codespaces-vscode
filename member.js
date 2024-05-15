function skillsMember() {
    // Path: member.js
    function member() {
        return {
            name: 'Member',
            skills: ['JavaScript', 'HTML', 'CSS']
        };
    }
    // Path: member.js
    function getMember() {
        return member();
    }

    return {
        getMember: getMember
    };
}