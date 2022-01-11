/**
 *
 * https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
 * https://youmightnotneedjquery.com/#json
 * https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit
 * -> trả về 1 dạng KQ tương tự Promise nhưng lại dùng done và fail
 * Ở đây xây dựng 1 đối tương CallData với phương thức getListData, ko phải 1 hàm, phương thức khi được gọi sẽ trả 1 về obj Promise like nhưng hadn riêng qua method của jQuery
 *
 *
 */

function CallData() {
  this.getListData = function () {
    return $.getJSON('../data/Data.json');
  };
}

/**
 * 
 * https://api.jquery.com/jquery.getjson/
 * 
 * As of jQuery 1.5, all of jQuery's Ajax methods return a superset of the XMLHTTPRequest object. 
 * This jQuery XHR object, or "jqXHR," returned by $.getJSON()
 * implements the Promise interface,
 * giving it all the properties, methods, and behavior of a Promise
 * (see Deferred object for more information).
 *
 * ========================
 *
 * https://stackoverflow.com/questions/7346563/loading-local-json-file
 * https://www.delftstack.com/howto/javascript/load-json-file-in-javascript/
 *
 */
