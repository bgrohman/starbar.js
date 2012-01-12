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

<style>
.starbar-graph {
    font-weight: normal;
    border-collapse: collapse;
}

.starbar-graph-label, .starbar-graph-value {
    padding-top: 3px;
    padding-left: 5px;
    padding-right: 5px;
}

.starbar-graph-label {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial';
    font-size: 12px;
}

.starbar-graph-value {
    font-family: 'Verdana', 'Serif';
    font-size: 16px;
}

.starbar-graph .starbar-graph-label {
    font-style: italic;
    color: #333333;
}

.starbar-graph .starbar-graph-value {
    font-weight: bold;
}

.starbar-graph .starbar-graph-row.odd {
    background-color: #eeeeee;
}
</style>

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
