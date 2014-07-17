describe("Viget Home Test", function() {

    var id_to_be_selected = "#firstname";

    var spy;
    var assert = sinon.assert;

    beforeEach(function() {
        spy = sinon.spy(window._gaq, "push");
    });

    afterEach(function() {
        spy.restore();
    });

    it ("track input", function() {

        var link = jQuery(id_to_be_selected);

        link.click();

        assert.called(spy);

    });

});
