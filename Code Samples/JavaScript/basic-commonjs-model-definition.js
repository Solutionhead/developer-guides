function SampleModel() {
    if (!(this instanceof InventoryMovementsViewModel)) return new InventoryMovementsViewModel();

    var model = this;

    model.isLoading = ko.observable(false);
    model.items = ko.observableArray([]);

    model.saveCommand = ko.asyncCommand({
        execute: function (complete) {
            // ... 
        },
        canExecute: function(isExecuting) {
            // ...
        }
    });
}

module.exports = SampleModel;