import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // public worksAccordionId = "accordionFlushExample";
  // public filteredWorks = [
  //   {
  //     id: "",
  //     databstarget: "",
  //     flushcollapseone: "",
  //     category: "",
  //     title: "",
  //     message: ""
  //   }
  // ];
  public works = new Array (
    {
      id: "flush-headingOne",
      databstarget: "#flush-collapseOne",
      flushcollapseone: "flush-collapseOne",
      category: "we",
      title: "Capgemini - (Kemper) 2020-2022",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingTwo",
      databstarget: "#flush-collapseTwo",
      flushcollapseone: "flush-collapseTwo",
      category: "p",
      title: "Seating App",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingThree",
      databstarget: "#flush-collapseThree",
      flushcollapseone: "flush-collapseThree",
      category: "p",
      title: "Jill Sells the Carolionas",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingFour",
      databstarget: "#flush-collapseFour",
      flushcollapseone: "flush-collapseFour",
      category: "gw",
      title: "Graphical Work 1",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingFive",
      databstarget: "#flush-collapseFive",
      flushcollapseone: "flush-collapseFive",
      category: "p",
      title: "Old Portfolio",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingSix",
      databstarget: "#flush-collapseSix",
      flushcollapseone: "flush-collapseSix",
      category: "p",
      title: "Older Portfolio",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
    {
      id: "flush-headingSeven",
      databstarget: "#flush-collapseSeven",
      flushcollapseone: "flush-collapseSeven",
      category: "gw",
      title: "Healthy Tid Bits",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget diam eu ullamcorper. Integer convallis ullamcorper nisi, mattis pharetra lectus tincidunt vitae. Proin id accumsan nisl. Suspendisse potenti. Morbi et elit id urna auctor blandit. Cras convallis sed neque non ultricies. Nullam suscipit, elit ut blandit elementum, ligula dolor tempus diam, eu pharetra velit tortor at nisi. Nullam blandit risus eu mi fermentum, sed suscipit augue pharetra. Nullam efficitur commodo purus, eget sodales dui viverra vitae. Vivamus a velit id sapien condimentum accumsan. Praesent quam nulla, sollicitudin a nisi in, semper tempor eros."
    },
  );

  public filteredWorks = new Array(this.works.length);

  constructor() { }

  ngOnInit(): void {

    this.filteredWorks = this.works;
    console.log(this.works);

  }

  search(event: any) {
    console.log(event.target.value);

    let searchString = event.target.value;

    console.log(this.filteredWorks);
    console.log(this.works);
    
    this.filteredWorks.forEach((work, index) => {
      console.log(work.title.toLowerCase());
      console.log(searchString);
      if (!work.title.toLowerCase().startsWith(searchString.toLowerCase())) {
        this.filteredWorks.splice(index, 1);
      }
    });
    
    if (!searchString) {
      console.log(this.works);
      this.filteredWorks = this.works;
    }
  }

}
