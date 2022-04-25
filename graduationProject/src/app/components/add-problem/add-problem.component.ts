import { Problem } from 'src/app/interfaces/problem.interface';
import { Component, OnInit } from '@angular/core';
import { ProblemService } from 'src/app/services/problem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  inputList: Array<Array<number>> = [];
  outputList: Array<any> = [];
  constructor(private problemService: ProblemService,private router: Router) { }

  ngOnInit(): void {


  }


  addProblem(f: any) {
    let prob: Problem = f.value;
    let problem = {
      title: prob.title,
      code: prob.code,
      rate: prob.rate,
      text: prob.text,
      input: this.inputList,
      output: this.outputList
    }

    this.problemService.addProblem(problem).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  inList(input: any) {
    this.inputList.push(new Array(input));
  }
  outList(output: any) {
    this.outputList.push(output);
  }
}
