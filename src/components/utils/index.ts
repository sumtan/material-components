export default class Utils {

    static merge(objA, objB) {
        var result = {};
        Utils.addAll(result, objA);
        Utils.addAll(result, objB);
        return result;
    };

    static addAll(base, add) {
        for (var key in add) {
            base[key] = add[key];
        }
        return base;
    }

    static getOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);

        return {
            top: top,
            left: left
        };
    }

    static generatePagination = function(vm) {
        var pager = [];

        // generate window
        var currentPage = vm.currentPage;
        pager.push(currentPage);
        var skip = 1;
        while(pager.length < vm.displayPages && pager.length < vm.pages) {
            var page = currentPage + skip;
            if (page >= 0 && page < vm.pages) {
                pager.push(page);
            }
            skip = skip > 0 ? skip * -1 : skip * -1 + 1;
        }
        pager = pager.sort(function(n1, n2) { return n1 - n2; });

        return pager;
    };
}