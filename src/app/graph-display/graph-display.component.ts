import { Component, OnInit } from '@angular/core';

import { DataSet} from 'vis-network/standalone';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html'
})
export class GraphDisplayComponent implements OnInit {


  graphData = {};

  public ngOnInit(): void {

  }



  ngAfterContentInit(){

    var changeChosenEdgeShadowX = function (values, id, selected, hovering) {
      console.log('foo')
    };


    // create an array with nodes
    var nodes = new DataSet([
      { id: 1, label: "Node 1", chosen : { label: false, node: changeChosenEdgeShadowX } },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ]);




    // create an array with edges
    var edges = new DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 }
    ]);

    // provide the data in the vis format
    this.graphData = {
      "nodes": nodes,
      "edges": edges
    }
  }
}
