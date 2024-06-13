import { Component, Input } from '@angular/core';
import { CommItem } from '../commendationItem';

@Component({
  selector: 'comm-list-item',
  templateUrl: './comm-list-item.component.html',
  styleUrl: './comm-list-item.component.css'
})
export class CommListItemComponent {
  @Input() comm! :CommItem;

  toggleCompleted() {
    this.comm.commIsComplete = !this.comm.commIsComplete;
  }
  getRewardType() {
    if(this.comm.rewardType === "null") return "";
    if(this.comm.rewardType.includes(",")) {
      let splicedType = this.comm.rewardType.split(",")
      let proTypes = ""
      for(let type of splicedType) {
        let proType = type[0].toUpperCase() + type.slice(1, type.length)
        proTypes += proType+", "
      }
      return proTypes.slice(0, proTypes.length-2)
    }
    return this.comm.rewardType[0].toUpperCase() + this.comm.rewardType.slice(1, this.comm.rewardType.length)
  }
  getRewards() {
    if(this.comm.rewards === "null") return ""
    return this.comm.rewards
  }
  // getGrades() {
  //   if(!this.comm.gradeSteps) return "";
  //   let gradess = ""
  //   if(this.comm.gradeSteps.Grade_I) gradess += this.comm.gradeSteps.Grade_I + "</br>"
  //   if(this.comm.gradeSteps.Grade_II) gradess += this.comm.gradeSteps.Grade_I + "\n"
  //   return gradess
  // }
}
