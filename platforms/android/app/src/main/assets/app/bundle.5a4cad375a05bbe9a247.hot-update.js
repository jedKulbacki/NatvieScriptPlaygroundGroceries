webpackHotUpdate("bundle",{

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".add-bar {\r\n    background-color: #CB1D00;\r\n    padding: 5;\r\n  }\r\n  .add-bar Image {\r\n    height: 25;\r\n    vertical-align: center;\r\n    margin-left: 10;\r\n    margin-right: 10;\r\n  }\r\n  .add-bar TextField {\r\n    padding: 10;\r\n  }\r\n  Label {\r\n    background-color: white;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: gray;\r\n  }"

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n\r\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n    <TextField #groceryTextField hint=\"Enter a grocery item\" col=\"0\"></TextField>\r\n    <Image src=\"~/images/add.png\" col=\"1\"></Image>\r\n  </GridLayout>\r\n\r\n  <RadListView row=\"1\" [items]=\"groceryList\">\r\n    <ng-template let-item=\"item\">\r\n      <Label [text]=\"item.name\" class=\"p-15\"></Label>\r\n    </ng-template>\r\n  </RadListView>\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0QkFBNEIsa0NBQWtDLG1CQUFtQixPQUFPLHNCQUFzQixtQkFBbUIsK0JBQStCLHdCQUF3Qix5QkFBeUIsT0FBTywwQkFBMEIsb0JBQW9CLE9BQU8sYUFBYSxnQ0FBZ0MsK0JBQStCLGtDQUFrQyxPQUFPLEM7Ozs7Ozs7QUNBbFksMmlCIiwiZmlsZSI6ImJ1bmRsZS41YTRjYWQzNzVhMDViYmU5YTI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5hZGQtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXHJcXG4gICAgcGFkZGluZzogNTtcXHJcXG4gIH1cXHJcXG4gIC5hZGQtYmFyIEltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwO1xcclxcbiAgfVxcclxcbiAgLmFkZC1iYXIgVGV4dEZpZWxkIHtcXHJcXG4gICAgcGFkZGluZzogMTA7XFxyXFxuICB9XFxyXFxuICBMYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xcclxcbiAgfVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyb2Nlcmllc1xcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuXFxyXFxuICA8R3JpZExheW91dCByb3c9XFxcIjBcXFwiIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJhZGQtYmFyXFxcIj5cXHJcXG4gICAgPFRleHRGaWVsZCAjZ3JvY2VyeVRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBhIGdyb2NlcnkgaXRlbVxcXCIgY29sPVxcXCIwXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYWRkLnBuZ1xcXCIgY29sPVxcXCIxXFxcIj48L0ltYWdlPlxcclxcbiAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgPFJhZExpc3RWaWV3IHJvdz1cXFwiMVxcXCIgW2l0ZW1zXT1cXFwiZ3JvY2VyeUxpc3RcXFwiPlxcclxcbiAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcInAtMTVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICA8L1JhZExpc3RWaWV3PlxcclxcblxcclxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=