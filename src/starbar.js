
(function (globals, undefined) {

    function max(a) {
        return Math.max.apply(Math, a);
    }

    function min(a) {
        return Math.min.apply(Math, a);
    }

    function repeat(str, n) {
        if (n === 1) { 
            return str; 
        } else if (n < 1) {
            return "";
        } else {
            return str + repeat(str, n - 1);
        }
    }

    function addRow(el, label, value) {
        var document = globals.document,
            r = document.createElement('tr'),
            dl = document.createElement('td'),
            dv = document.createElement('td');

        dl.innerHTML = label;
        dv.innerHTML = value;
        r.appendChild(dl);
        r.appendChild(dv);
        el.appendChild(r);
    }

    /**
     * Build a starbar graph.
     * @param options.el DOM element in which to create the graph
     * @param options.labels array of label strings
     * @param options.values array of values
     */
    function graph(options) {
        var el = options.el,
            labels = options.labels,
            values = options.values,
            length = labels.length,
            table = globals.document.createElement('table'),
            i;

        for (i = 0; i < length; i++) {
            addRow(table, labels[i], repeat("*", Math.abs(values[i])));
        }

        el.appendChild(table);
    }

    globals.starbar = {
        graph: graph
    };

})(window);
