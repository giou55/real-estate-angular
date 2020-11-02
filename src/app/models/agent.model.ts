export class Agent {
    constructor(
        public agentID: string,
        public name: string,
        public aboutMe: string,
        public mobile: string,
        public office: string,
        public email: string,
        public telephone: string,
        public address: string,
        public image: { url: string },
        public areas: [],
        public properties: []
    ) {}
}
