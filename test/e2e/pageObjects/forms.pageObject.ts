export class FormsPageObject {
    public firstForm = element(by.css('.form_first'));
    public secondForm = element(by.css('.form_second'));
    public inputs = element.all(by.css('.input'));
    public control = element(by.css('.form-control'));
    public alert = element(by.css('.alert'));
    public log = element(by.id('log'));
    public buttons = element.all(by.css('.btn'));
    public selectable = element.all(by.tagName('option'));

    public controls = {
        name: this.inputs.get(0),
        surname: this.inputs.get(1),
        selectable: this.control,
        firstSubmitButton: this.buttons.get(0),
        secondSubmitButton: this.buttons.get(1)
    };
}