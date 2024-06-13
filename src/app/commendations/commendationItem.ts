export class CommItem {
    constructor(public title :string,
        public category :string,
        public requirements :string,
        public rewards :string,
        public rewardType :string,
        public imageName :string,
        public commIsComplete :boolean = false,
        public isRemoved :boolean,
        public isDiscontinued :boolean,
        public isTimeLimited :boolean,
        public gradeSteps? :any
    ) {}
}