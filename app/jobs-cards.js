var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var drawCards = function (tableJobs, jobs) {
    tableJobs.innerHTML = '';
    jobs.forEach(function (job) {
        var container = document.createElement('div');
        container.className = 'card';
        var title = document.createElement('h3');
        var description = document.createElement('p');
        var location = document.createElement('span');
        var seniority = document.createElement('span');
        var category = document.createElement('span');
        //const textID = document.createTextNode(job.id);
        //h3.appendChild(textID);
        var textName = document.createTextNode(job.name);
        title.appendChild(textName);
        var textDescription = document.createTextNode(job.description);
        description.appendChild(textDescription);
        var textLocation = document.createTextNode(job.location);
        location.appendChild(textLocation);
        var textCategory = document.createTextNode(job.category);
        category.appendChild(textCategory);
        var textSeniority = document.createTextNode(job.seniority);
        seniority.appendChild(textSeniority);
        var editBtn = document.createElement('a');
        editBtn.setAttribute('href', "edit-job.html?id=".concat(job.id));
        editBtn.appendChild(document.createTextNode('edit'));
        editBtn.className = 'button-28';
        var deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('delete'));
        deleteBtn.className = 'button-28';
        deleteBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, deleteJob(job.id)];
                    case 1:
                        _a.sent();
                        loadCards(tableJobs);
                        return [2 /*return*/];
                }
            });
        }); });
        container.appendChild(title);
        container.appendChild(document.createElement('br'));
        container.appendChild(description);
        container.appendChild(document.createElement('br'));
        container.appendChild(location);
        container.appendChild(document.createElement('br'));
        container.appendChild(category);
        container.appendChild(document.createElement('br'));
        container.appendChild(seniority);
        container.appendChild(document.createElement('br'));
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);
        tableJobs.appendChild(container);
    });
};
var loadCards = function (tableJobs) { return __awaiter(_this, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loader('show');
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                loader('hide');
                drawCards(tableJobs, jobs);
                return [2 /*return*/];
        }
    });
}); };
var tableJobs = document.getElementById('table-jobs');
var locationOption = document.getElementById("new-job-location-tag");
var seniorityOption = document.getElementById("new-job-seniority-tag");
var categoryOption = document.getElementById("new-job-category-tag");
locationOption === null || locationOption === void 0 ? void 0 : locationOption.addEventListener('change', function () { return __awaiter(_this, void 0, void 0, function () {
    var locationToSearch, jobs, filteredJobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                locationToSearch = locationOption.value;
                loader('show');
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                loader('hide');
                filteredJobs = jobs.filter(function (x) { return x.location === locationToSearch; });
                drawCards(tableJobs, filteredJobs);
                return [2 /*return*/];
        }
    });
}); });
seniorityOption === null || seniorityOption === void 0 ? void 0 : seniorityOption.addEventListener('change', function () { return __awaiter(_this, void 0, void 0, function () {
    var seniorityToSearch, jobs, filteredJobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                seniorityToSearch = seniorityOption.value;
                loader('show');
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                loader('hide');
                filteredJobs = jobs.filter(function (x) { return x.seniority === seniorityToSearch; });
                drawCards(tableJobs, filteredJobs);
                return [2 /*return*/];
        }
    });
}); });
categoryOption === null || categoryOption === void 0 ? void 0 : categoryOption.addEventListener('change', function () { return __awaiter(_this, void 0, void 0, function () {
    var categotyToSearch, jobs, filteredJobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categotyToSearch = categoryOption.value;
                loader('show');
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                loader('hide');
                filteredJobs = jobs.filter(function (x) { return x.category === categotyToSearch; });
                drawCards(tableJobs, filteredJobs);
                return [2 /*return*/];
        }
    });
}); });
loadCards(tableJobs);
