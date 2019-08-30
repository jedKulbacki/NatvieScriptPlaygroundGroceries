webpackHotUpdate("bundle",{

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n\r\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n    <TextField #groceryTextField [(ngModel)]=\"grocery\" hint=\"Enter a grocery item\" col=\"0\"></TextField>\r\n    <Image src=\"~/images/add.png\" (tap)=\"add()\" col=\"1\"></Image>\r\n  </GridLayout>\r\n\r\n  <RadListView row=\"1\" [items]=\"groceryList\"\r\n  swipeActions=\"true\" (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\">\r\n\r\n  <ng-template let-item=\"item\">\r\n    <Label [text]=\"item.name\" class=\"p-15\"></Label>\r\n  </ng-template>\r\n\r\n  <GridLayout *tkListItemSwipeTemplate columns=\"*, auto\">\r\n    <StackLayout id=\"delete-view\" col=\"1\" (tap)=\"delete($event)\" class=\"delete-view\">\r\n      <Image src=\"~/images/delete.png\"></Image>\r\n    </StackLayout>\r\n  </GridLayout>\r\n\r\n</RadListView>\r\n<ActivityIndicator [busy]=\"isLoading\" [visibility]=\"isLoading ? 'visible' : 'collapse'\" row=\"1\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></ActivityIndicator>\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnbUMiLCJmaWxlIjoiYnVuZGxlLjYwZjkxZmYxNjUyMGY0MTA3ZGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG5cXHJcXG4gIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcclxcbiAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkIFsobmdNb2RlbCldPVxcXCJncm9jZXJ5XFxcIiBoaW50PVxcXCJFbnRlciBhIGdyb2NlcnkgaXRlbVxcXCIgY29sPVxcXCIwXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYWRkLnBuZ1xcXCIgKHRhcCk9XFxcImFkZCgpXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxyXFxuICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICA8UmFkTGlzdFZpZXcgcm93PVxcXCIxXFxcIiBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCJcXHJcXG4gIHN3aXBlQWN0aW9ucz1cXFwidHJ1ZVxcXCIgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIj5cXHJcXG5cXHJcXG4gIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcInAtMTVcXFwiPjwvTGFiZWw+XFxyXFxuICA8L25nLXRlbXBsYXRlPlxcclxcblxcclxcbiAgPEdyaWRMYXlvdXQgKnRrTGlzdEl0ZW1Td2lwZVRlbXBsYXRlIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjFcXFwiICh0YXApPVxcXCJkZWxldGUoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImRlbGV0ZS12aWV3XFxcIj5cXHJcXG4gICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9kZWxldGUucG5nXFxcIj48L0ltYWdlPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbjwvUmFkTGlzdFZpZXc+XFxyXFxuPEFjdGl2aXR5SW5kaWNhdG9yIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIHJvdz1cXFwiMVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=