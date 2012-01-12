starbar.js
==========

Simple text bar graphs.

    var labels = ['foo', 'bar', 'baz', 'foobar', 'foobarbaz'],
        data = [10, 7, 3, 5, 15],
        el = $('#test-2')[0];

    starbar.graph({
        el: el, 
        labels: labels, 
        values: data
    });

<link rel="stylesheet" type="text/css" href="https://raw.github.com/bgrohman/starbar.js/master/src/starbar.css"/>

<table class="starbar-graph">
    <tr class="starbar-graph-row even">
        <td class="starbar-graph-label">foo</td>
        <td class="starbar-graph-value">**********</td>
    </tr>
    <tr class="starbar-graph-row odd">
        <td class="starbar-graph-label">bar</td>
        <td class="starbar-graph-value">*******</td>
    </tr>
    <tr class="starbar-graph-row even">
        <td class="starbar-graph-label">baz</td>
        <td class="starbar-graph-value">***</td>
    </tr>
    <tr class="starbar-graph-row odd">
        <td class="starbar-graph-label">foobar</td>
        <td class="starbar-graph-value">*****</td>
    </tr>
    <tr class="starbar-graph-row even">
        <td class="starbar-graph-label">foobarbaz</td>
        <td class="starbar-graph-value">***************</td>
    </tr>
</table>
