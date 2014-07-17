(function($) {
    
    // Track clicks on outbound links
    $("body").delegate("input", "click", function(e) {

        e.preventDefault();
        
        _gaq.push([
            '_trackEvent', 'Outbound Links', 'Click', this.text
        ]);

        setTimeout(function(url) {
            document.location = url;
        }, 100, this.href);

    });
    
}(window.jQuery));