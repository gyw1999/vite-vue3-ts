@{
  Layout = "Layoutpro.cshtml";
}
@section Main
{
<script src="~/Scripts/jquery-1.8.2.min.js"></script>
<script src="~/Scripts/MyAjax.js?v=3.3.8"></script>
  @*
<script src="~/Scripts/commomjs/AddProjs.js"></script>*@
<link href="~/Content/myTheme/style-tf.css?v=1.91" rel="stylesheet" />
<link href="~/Content/myTheme/index-tf.css?v=3.21" rel="stylesheet" />
<link href="~/Content/myTheme/newban.css?v=1.1" rel="stylesheet" />
<link href="~/Content/myTheme/edit-pro.css" rel="stylesheet" />
  @*
<script src="~/Scripts/FuzzySearch.js?v=2"></script>*@
<script src="~/Scripts/cxzx/FuzzySearch.js"></script>
<script src="http://www.jq22.com/jquery/html5.min.js"></script>
<link href="~/Content/Fuzzy2.css" rel="stylesheet" />
<link href="~/Content/myTheme/normalize.css?v=1.4" rel="stylesheet" />
<link href="~/Content/myTheme/cxhd.css?v=2.5" rel="stylesheet" />
<link href="~/Content/stylesheets/simple-calendar.css" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900">
<link href="~/Content/layer/mobile/need/layer.css" rel="stylesheet" />
<script src="~/Content/layer/layer.js"></script>

<script src="~/Scripts/Ctrl_Paging/angular.min.js"></script>
  @*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.20.0/select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.20.0/select.min.js"></script>*@

<script src="~/Scripts/Ctrl_Paging/select.min.js"></script>
<link href="~/Scripts/Ctrl_Paging/select.min.css" rel="stylesheet" />
<script src="~/js/simple-calendar.js"></script>
<link href="~/Content/myTheme/select2.min.css" rel="stylesheet" />
<script src="~/js/select2.min.js"></script>
<script src="~/js/echarts.min.js"></script>
<script src="~/js/TableFreeze.js"></script>
<style>
  .seemore {
      z-index: 999;
      background: rgba(18,18,18,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .imgss {
      width: 15px;
      height: 15px;
  }

  .seemore table {
      margin-top: 15px;
      border: none;
  }

      .seemore table thead tr {
          background: none;
          border-bottom: 1px solid #eee;
      }

      .seemore table tbody tr {
          background: none;
          border-bottom: 1px solid #eee;
      }

  .tableShowMore {
      height: 100%;
  }

  .moreBox {
      width: 50%;
      height: 550px;
      background: #fff;
      padding: 30px 20px;
      margin-top: 60px
  }

  #right {
      padding: 0
  }

  .topMenu {
      background: #fff;
      display: flex;
      height: 40px;
      align-items: center;
  }

      .topMenu .lefts {
          display: flex;
          align-items: center;
          padding-right: 20px;
          border-right: 1px solid #d8d8d8;
          color: transparent;
          background-image: linear-gradient(to right, #9E41CA, #5060FC);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
      }

          .topMenu .lefts img {
              width: 11px;
              height: 11px;
              margin-left: 28px;
              margin-right: 2px;
          }

      .topMenu .rights {
          padding-left: 20px;
      }

  .middioValues {
      padding: 0 15px;
      display: flex;
      width: 95%;
  }

  .leftCon {
      width: 50%
  }

  .itemCode {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.9);
      display: flex;
      height: 41px;
      background: #fff;
      margin-top: 9px;
      align-items: center;
  }

      .itemCode text {
          width: 15px;
          height: 15px;
          background: #514FFF;
          color: #fff;
          font-size: 10px;
          display: flex;
          align-content: center;
          justify-content: center;
          line-height: 14px;
          border-radius: 3px;
          margin-right: 3px;
          margin-left: 14px;
          font-weight: 400;
      }

  .projectData {
  }

      .projectData .tits {
          height: 19px;
          padding: 7px 0 7px 19px;
          color: #2E12C9;
          font-weight: 600;
      }

          .projectData .tits img {
              width: 9px;
              height: 9px;
              margin-right: 3px;
              margin-top: 5px;
          }

  .projectValues {
      background: #fff;
      padding: 14px 11px;
      /*min-width:704px;*/
  }

  .inputItem {
      display: flex;
      width: 96.3%;
  }

      .inputItem .tit {
          color: #000;
          margin-right: 15px;
          margin-top: 3px;
          min-width: 50px;
      }

      .inputItem input {
          padding: 4px 2px;
          width: 87%;
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
          background: #FFFFFF;
          border-radius: 4px 4px 4px 4px;
          border: 1px solid #DCDEE0;
      }

      .inputItem textarea {
          border: 1px solid rgb(221, 221, 221);
          padding: 4px 10px;
          width: 95%;
          border-radius: 2px;
          height: 87px;
      }

          .inputItem textarea:focus {
              border: 1px solid rgb(221, 221, 221);
              outline: none !important;
          }

      .inputItem .titStart {
          display: flex;
          align-items: center;
      }

          .inputItem .titStart input {
              width: 200px;
          }

          .inputItem .titStart text {
              margin-right: 15px;
              margin-top: 3px;
          }

  .titright {
      /*margin-left: 8.2%;*/
      width: 70%;
  }

  .topstit {
      display: flex;
      justify-content: space-between;
      padding-right: 25px;
  }

      .topstit text {
          color: #4E55FF;
          text-decoration-line: underline;
          margin-top: 8px;
          cursor: pointer;
      }

  .valuesToAddStore {
      height: 56px;
      background: #fff;
      padding: 15px 24px;
  }

  .valStore {
      display: flex;
      background: #F7F6FA;
      height: 100%;
      border-radius: 5px;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
  }

  .addNums {
      color: #777777;
  }

      .addNums text {
          font-weight: 700;
          font-size: 20px;
          color: rgba(0,0,0,0.9);
      }

  .addButton {
      background: #4E55FF;
      border-radius: 2px 2px 2px 2px;
      color: #fff;
      padding: 4px 16px;
      cursor: pointer;
      position: relative;
      top: -0.5px;
  }

  .classType text {
      margin-right: 8px;
  }

  .cancels {
      color: #4E55FF;
      padding: 4px 16px;
      cursor: pointer
  }

  .buttonArea {
      display: flex;
      background: #fff;
      padding-bottom: 24px;
      padding-top: 5px;
      justify-content: flex-end;
      padding-right: 26px;
  }

  .rightCon {
      width: 47%;
      margin-left: 2%;
  }

  .imgs {
      width: 14px;
      height: 14px;
      margin-top: 3px;
  }

  .historyreFerence {
      font-weight: 700;
      padding: 10px 0;
  }

  .hisQuery {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #d8d8d8;
      padding-bottom: 15px;
  }

      .hisQuery input {
          margin-left: 10px;
          width: 164px;
          border: 1px solid rgb(221, 221, 221);
      }

  .hisBox {
      background: #fff;
      padding: 9px 11px;
  }

  .hisValues {
      display: flex;
      padding: 27px 0 15px;
  }

  .queryValues {
      font-weight: 700;
      font-size: 20px;
      color: rgba(0,0,0,0.9);
  }

  .upRadio {
      margin-left: 40px;
      display: flex;
      align-items: center;
  }

      .upRadio text {
          display: inline-block;
          background: #fff;
          position: absolute;
          right: 2px;
          top: 2px;
          width: 17px;
      }

      .upRadio input {
          width: 41px;
          height: 23px;
          border: 1px solid rgb(221, 221, 221);
      }

  .uppp {
      margin-left: 10px;
      text-decoration-line: underline;
      color: #4E55FF;
      cursor: pointer;
  }

  .projectLeader {
      margin-top: 20px;
  }

  .projectTip {
      padding: 10px;
      width: 97%;
      background: #FFF5ED;
      padding-left: 10px;
      color: #ED6A0C;
  }

  .leaderValues {
      padding: 25px;
      background: #fff;
  }

  .leaderTit {
      font-weight: 700;
      margin-bottom: 19px;
  }

  .leadervls {
      position: relative;
  }

      .leadervls text {
          font-weight: 700;
          font-size: 23px;
          color: rgba(0, 0, 0, 0.9);
          position: absolute;
          left: 2px;
          top: 10px;
      }

      .leadervls input {
          height: 38px;
          line-height: 39px;
          width: 178px;
          padding: 0 5px 0 25px;
          border: 1px solid rgb(221, 221, 221);
          font-size: 22px;
          font-weight: 700;
      }

  .nextBox {
      padding: 35px 11px 17px 0;
      background: #fff;
      border-top: 1px solid #e7e7e7;
      display: flex;
      justify-content: end;
  }

  .tableBox {
      background: #fff;
      border-radius: 5px;
      padding: 9px 14px;
      margin-top: 9px;
      position: relative;
  }

  .topTable {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      align-items: center;
  }

  .tabSelect {
      font-weight: 400;
      color: #fff;
      padding: 7px 10px;
      background: #4E55FF;
      display: flex;
      border-radius: 5px;
  }

      .tabSelect p:nth-child(1) {
          padding-right: 8px;
          /*border-right: 1px solid #fff;*/
      }

      .tabSelect p:nth-child(2) {
          padding-left: 8px;
      }

  .tableshow {
      padding: 0 0 10px;
      margin-top: 20px;
      height: 480px;
      overflow-y: auto;
  }

  /*筛选*/
  .hdsx {
      position: absolute;
      top: 20px;
      right: 116px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.25);
      z-index: 99;
      width: 340px;
  }

      .sxtj h6, .hdsx h6 {
          height: 32px;
          line-height: 32px;
          background: #F6F8FA;
      }

      .hdsx ul {
          padding: 10px 20px 20px;
          max-height: 550px;
          overflow: auto;
      }

  .promotion .hdsx ul li {
      padding: 6px 0;
      border-bottom: 1px solid #EBEEF1;
  }

  .promotion ul li span {
      color: #333;
      display: block;
      font-size: 13px;
      font-weight: 600;
  }

  .promotion ul li p {
      margin-top: 5px;
      position: relative;
      display: inline-block;
  }

  .sxtj h6 .btn-xk, .hdsx h6 .btn-xk {
      width: 40px;
      height: 22px;
      line-height: 22px;
      padding: 0;
      margin-top: 5px;
      border: 1px solid #C1C2C4;
      border-radius: 5px;
      margin-left: 5px;
  }

  .sxtj h6 .btn, .hdsx h6 .btn {
      margin: 0 12px;
      float: right;
      width: 40px;
      height: 22px;
      line-height: 22px;
      background: #4E55FF;
      color: #fff;
      margin-top: 5px;
      font-size: 12px;
      font-weight: 400;
      padding: 0;
  }

  .tableshow {
      padding: 0 0 10px;
      margin-top: 20px;
  }

  table {
      border-collapse: collapse; /* 合并单元格边框 */
  }

  table, th, td {
      border: none !important; /* 去掉边框 */
  }

      table thead tr {
          width: 100%;
          font-weight: 600;
          background: #fff;
          height: 47px;
          line-height: 47px;
          border-top: 1px solid #eee;
      }

      table tr th, table tr td {
          border: 1px solid #eee;
          padding: 0 5px;
          text-align: center;
          white-space: nowrap;
          height: 36px;
          line-height: 36px;
          /* overflow: hidden; */
          /* text-overflow: ellipsis; */
      }

      table tr {
          border-bottom: 1px solid #eee;
      }

          table tr input {
              vertical-align: middle;
              margin-right: 5px;
              margin-bottom: 2px;
          }

      td img {
          width: 20px;
          height: 20px;
          margin: 3px;
      }

  .tableshow td ol {
      position: absolute;
      top: 100%;
      right: 10px;
      width: 88px;
      color: #4E55FF;
      background: #FFFFFF;
      box-shadow: 0px 10px 30px 1px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      font-weight: 600;
      text-align: left;
      padding-left: 10px;
      z-index: 8;
  }

  .tableshow td {
      position: relative;
  }

      .tableshow td ol li {
          line-height: 30px;
          height: 30px;
          cursor: pointer;
      }

          .tableshow td ol li img {
              width: 14px;
              height: 14px;
              vertical-align: middle;
          }

  .middioValues2 {
      padding: 0 15px;
      width: 95%;
      position: relative;
  }

  .topTarget {
      background: #fff;
      padding-bottom: 20px;
  }

  .codeContent {
      display: flex;
      flex-direction: column;
      background: #F7F6FA;
      border-radius: 4px 0px 0px 4px;
      margin-left: 14px;
      width: 40%;
      padding: 2.4% 25px;
      justify-content: space-between;
  }

  .codeItem .top {
      font-weight: 500;
      font-size: 15px;
      color: rgba(0,0,0,0.9);
      white-space: nowrap;
  }

  .codeItem .bto {
      font-weight: 700;
      font-size: 23px;
      color: rgba(0,0,0,0.9);
      margin-top: 16px;
  }

  .tabChange {
      display: flex;
      background: linear-gradient( 270deg, rgba(255,255,255,0.05) 0%, rgba(78,85,255,0.1) 100%);
      box-shadow: inset 0px -1 0px 0px #E7E7E7;
      padding-left: 20px;
      position: relative;
  }

  .morenbslBox {
      position: absolute;
      right: 0%;
      top: 0%;
      display: flex;
      align-items: center;
  }

      .morenbslBox .tit {
          white-space: nowrap;
          font-weight: 600;
          font-size: 14px;
          color: #111111;
          margin-right: 14px;
      }

      .morenbslBox input {
          height: 27px;
          line-height: 29px;
          background: #FFFFFF;
          border-radius: 4px 4px 4px 4px;
          border: 1px solid #DCDEE0;
          font-weight: 400;
          font-size: 15px;
          color: rgba(0, 0, 0, 0.9);
          width: 53%;
          box-sizing: border-box;
          padding-left: 2%;
      }

  .tabItem {
      margin-right: 70px;
      padding: 15px 0;
      font-weight: 500;
      font-size: 12px;
      color: rgba(0,0,0,0.9);
      display: flex;
      position: relative;
      cursor: pointer;
  }

      .tabItem img {
          margin-right: 5px;
          margin-top: 2px;
      }

  .curItems {
      position: absolute;
      width: 62px;
      height: 45px;
      bottom: -20px;
  }

  .curDiv {
      border-bottom: 2px solid blue
  }

  .codeAndSetBox {
      display: flex;
      width: 100%;
  }

  .setBox {
      display: flex;
      align-items: center;
      background: rgba(78, 85, 255, 0.08);
      border-radius: 0px 4px 4px 0px;
      padding-top: 1.1%;
      padding-left: 1%;
  }

      .setBox .tit {
          white-space: nowrap;
      }

  .singleSelect {
      border: 1px solid rgb(221, 221, 221);
  }

  ::-webkit-input-placeholder {
      /* WebKit browsers，webkit内核浏览器 */
      font-size: 13px;
      color: #999999;
  }

  :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-size: 13px;
      color: #999999;
  }

  ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-size: 13px;
      color: #999999;
  }

  :-ms-input-placeholder {
      /* Internet Explorer 10+ */
      font-size: 13px;
      color: #999999;
  }

  .lineTextBox {
      display: flex;
      justify-content: space-around;
  }

  .leftTt {
      padding-left: 16px;
  }



  /*产品返厂榜单 的表格实现滚动条*/
  #page5table_tbody {
      width: 100%;
      border-spacing: 0px;
      border-collapse: collapse;
  }
      /*隐藏滚动条*/
      #page5table_tbody::-webkit-scrollbar {
          width: 5px;
      }

      #page5table_tbody::-webkit-scrollbar-thumb {
          background-color: #cccccc;
          border-radius: 5px;
      }

          #page5table_tbody::-webkit-scrollbar-thumb:hover {
              background-color: #cccccc;
          }

      #page5table_tbody::-webkit-scrollbar-track {
          background-color: rgba(204, 204, 204,0.5);
      }

  #page5table tbody {
      /* display: block; */
      height: auto;
      max-height: 345px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
  }

      #page5table thead tr, #page5table tbody tr, #page5table tfoot tr {
          box-sizing: border-box;
          /* table-layout: fixed; */
          /* display: table; */
          width: 100%;
      }


  /*表格*/


  .tablebox tr th {
      text-align: center !important;
      font-weight: 600 !important;
      font-size: 12px !important;
      color: #222 !important;
      white-space: nowrap !important;
  }

  .tablebox tr td {
      height: 35px !important;
      text-align: center !important;
      font-weight: 400 !important;
      font-size: 12.5px !important;
      /*   color: #333333 !important;*/
      box-sizing: border-box !important;
      /*padding: 2px 15px !important;*/
      white-space: nowrap !important;
  }

  tbody tr td:first-child {
      font-style: italic !important;
  }

  .layui-table {
      margin-bottom: 0 !important;
      border: none !important;
  }

      .layui-table td, .layui-table th {
          border-color: #F0F0F0 !important;
      }





  .showslh {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap !important;
  }



  .cptable {
      background: #fff;
  }

      .cptable tbody {
          /* display: block; */
          height: 390px;
          overflow-y: scroll;
      }

          .cptable thead, .cptable tbody tr {
              /* display: table; */
              width: 100%;
              /* table-layout: fixed; */
          }

      .cptable thead {
          width: calc(100% - 0.8em)
      }

      .cptable tr td {
          /*white-space: pre-wrap;*/
          text-align: center !important
      }

          .cptable tr td:nth-child(1) {
              width: 40px !important
          }




  #addrightnum .codeItem {
      width: 50%;
      flex-wrap: wrap;
      justify-content: start;
      margin-bottom: 10px;
  }

  .sftbbox {
      display: flex;
      align-items: center;
      /*background: rgba(78, 85, 255, 0.08);*/
      background: #f1f2ff;
      border-radius: 0px 4px 4px 0px;
      padding-top: 1.1%;
      padding-left: 5%;
      width: 96.3%;
      box-sizing: border-box;
  }

      .sftbbox .tit {
          white-space: nowrap;
          color: #000;
          margin-right: 15px;
          margin-top: 3px;
          min-width: 50px;
      }

      .sftbbox .addButton {
          background: #4E55FF;
          border-radius: 2px 2px 2px 2px;
          color: #fff;
          padding: 4px 16px;
          cursor: pointer;
          position: relative;
          top: -0.5px;
          margin-right: 10px;
          width: 30px;
          text-align: center;
      }

  .semrbslbox {
      position: absolute;
      right: 0%;
      top: -4%;
  }

  .bgbottom10 {
      margin-bottom: 10px;
  }

  .xiangqingbtn {
      padding: 2px 3px;
      background: #4E55FF;
      color: #fff;
      font-size: 12px;
      border-radius: 4px !important;
  }

  #xqshowtable tr td:nth-child(1) {
      width: 120px !important;
  }

  #xqshowtable thead tr th:nth-child(1) {
      text-align: center;
  }

  .sdqrbox {
      margin-bottom: 2%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 3%;
  }

  .mr7px {
      height: 14px !important;
      width: 14px !important;
      margin-right: 7px !important;
  }
</style>

<script src="~/js/echarts.min.js"></script>
<script src="~/Scripts/Ctrl_Paging/angular.min.js"></script>
<section class="content" style="height:88%;overflow:auto; margin:0 auto" ng-app="myApp" ng-controller="myCtrl" ng-cloak>
  <div class="topMenu">
      <p class="lefts"><img src="~/Images/dh-gncdrk.png" /> 功能菜单入口</p>
      <p class="rights">新增项目销售计划</p>
  </div>
  <div ng-click="DivClick()">
      <div class="middioValues" ng-show="Xsjhhtml1">
          <div class="leftCon" ng-click="QueryClick()">
              <div class="itemCode"> <text>新</text> 项目编码：{{xsjhjson1.XMNO}}</div>
              <div class="projectData">
                  <p class="tits"><img src="~/Images/xmzl@2xs.png" /><text>项目资料</text></p>
                  <div class="projectValues">
                      <div class="inputItem bgbottom10">
                          <div class="tit">项目名称</div>
                          <input placeholder="请输入项目名称" maxlength="150" ng-model="xsjhjson1.XMNAME" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" style="width:100%;" />
                      </div>
                      <div class="inputItem bgbottom10">
                          <div class="tit">项目描述</div>
                          <textarea id="description" name="description" placeholder="请输入项目描述" ng-model="xsjhjson1.XMCOMM" maxlength="200" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'"></textarea>
                      </div>
                      <div class="inputItem bgbottom10">
                          <div class="tit">项目类型</div>
                          <select class="singleSelect" ng-model="xsjhjson1.XMTYPE" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" style="width:95%" ng-change="SelectType()">
                              <option value="" disabled selected hidden></option>
                              <option ng-repeat="option in XMTYPE" value="{{option.ID_NR}}">{{option.SNAME}}</option>
                          </select>
                      </div>
                      <div class="inputItem bgbottom10" style="align-items: center; position: relative; width: 96.3%;">
                          <div class="titStart ">
                              <text style="white-space:nowrap">是否同步月度销售指标</text>
                              <label class="yesOrNoBox" style="margin-right:17px">
                                  <input type="radio" value="Y" ng-model="xsjhjson1.YN_NY" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="GetNY()" style="width:auto">
                                  是
                              </label>
                              <label class="yesOrNoBox">
                                  <input type="radio" value="N" ng-model="xsjhjson1.YN_NY" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="GetNY()" style="width:auto">
                                  否
                              </label>
                          </div>
                          <div class="titStart titright" style="position: absolute; right: 0%;width:55%;">
                              <text style="white-space:nowrap">年-月</text>
                              <select class="singleSelect" style="width: 50%; margin-right: 17px;" ng-model="xsjhjson1.TBYEAR" style="width: 190px;" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'||xsjhjson1.YN_NY!='Y'" ng-change="GetYEAR()">
                                  <option ng-repeat="option in TBYEARLIST" value="{{option.YAER}}">{{option.YAER}}</option>
                              </select>
                              <select class="singleSelect" style="width:50%" ng-model="xsjhjson1.TBMONTH" style="width: 250px;" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'||xsjhjson1.YN_NY!='Y'" ng-change="GetYEAR()">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                              </select>
                          </div>
                      </div>
                      <div class="inputItem bgbottom10" style="align-items: center; position: relative;width:96.3%;">
                          <div class="titStart" style=""><text style="min-width:50px;">开始日期</text> <input type="date" ng-model="xsjhjson1.SDATE" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'||xsjhjson1.YN_NY=='Y'" ng-change="GetCKDATE()" /></div>
                          <div class="titStart titright" style="margin-left: 11%; position: absolute; right: 1%; right: 0%;width:auto;"><text>截止日期</text> <input type="date" ng-model="xsjhjson1.EDATE" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'||xsjhjson1.YN_NY=='Y'" ng-change="GetCKDATE()" /></div>
                      </div>
                      <div class="inputItem bgbottom10" ng-show="JL">
                          <div class="tit">节令类型</div>
                          <select class="singleSelect" ng-model="xsjhjson1.FESTIVAL_ID" ng-change="SelectJl()" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" style="width:95%">
                              <option value="" disabled selected hidden></option>
                              <option ng-repeat="option in FESTIVAL_ID" value="{{option.ID_NR}}">{{option.SNAME}}</option>
                          </select>
                      </div>
                  </div>
              </div>

              <div class="projectData">
                  <view class="topstit"><p class="tits"> <img src="~/Images/mdfw@2xs.png" /> 门店范围</p>  <text ng-click="ShowHtml('MDEdit')">查看/编辑</text> </view>
                  <div class="valuesToAddStore">
                      <div class="valStore">
                          <p class="addNums"><text>{{xsjhjson2.length}}</text>个门店已添加</p>
                          <p ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" class="addButton" ng-click="ShowHtml('MDAdd')">去添加</p>
                      </div>

                  </div>
              </div>

              <div class="projectData">
                  <view class="topstit"><p class="tits"><img src="~/Images/plspfw@2xs.png" /> 品类/商品范围</p>  <text ng-click="ShowHtml('PLSPEdit')">查看/编辑</text> </view>

                  <div class="valuesToAddStore" style="height:95px">
                      <view class="classType">
                          <text>添加类别</text>

                          <label style="margin-right:17px;">
                              <input type="radio" value="Y" ng-model="xsjhjson1.YN_DP" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="Yn_Dp_Check()">
                              商品
                          </label>
                          <label>
                              <input type="radio" value="N" ng-model="xsjhjson1.YN_DP" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="Yn_Dp_Check()">
                              品类
                          </label>
                      </view>
                      <div class="valStore" style="height:65px;margin-top:12px;">
                          <p class="addNums" ng-show="xsjhjson1.YN_DP=='N'"><text>{{xsjhjson3.length}}</text>个品类已添加</p>
                          <p class="addNums" ng-show="xsjhjson1.YN_DP=='Y'"><text>{{xsjhjson4.length}}</text>个商品已添加</p>
                          <p ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" class="addButton" ng-click="ShowHtml('PLSPAdd')">去添加</p>
                      </div>
                  </div>
              </div>
              <p class="projectTip"> <img src="~/Images/jg.png" class="imgs" /> 修改以上数据后需重新点击保存后查询历史参考销售额。</p>
              <div class="buttonArea"><p class="addButton" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" ng-click="SaveZbData()">保存</p></div>
          </div>
          <div class="rightCon">
              <div class="targetBox" ng-show="XsjhRight">
                  <div class="historyreFerence">
                      <img src="~/Images/lsckxse@2xs.png" class="imgs" />  历史参考销售额
                  </div>
                  <div class="hisBox">
                      <div class="hisQuery">
                          <p>
                              开始日期  <input type="date" placeholder="请选择开始日期" ng-model="xsjhjson1.SDATE_CK" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />
                          </p>
                          <p>
                              结束日期  <input type="date" placeholder="请选择结束日期" ng-model="xsjhjson1.EDATE_CK" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />
                          </p>
                          <p class="addButton" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" ng-click="QueryHis()" ng-disabled="qhisclick">查询</p>
                      </div>
                      <p class="projectTip" style=" margin-top: 15px; "> <img src="~/Images/jg.png" class="imgs" />参考指标金额=参考日期、门店、商品范围的合计金额*项目天数/参考天数。</p>
                      <div class="hisValues">
                          <p class="queryValues">￥{{xsjhjson1.XSNET_CK?xsjhjson1.XSNET_CK:"---"}} </p>
                          <div class="upRadio">
                              <p style="position:relative"><span style=" position: relative; top: 2px;">提高百分比</span> <input type="text" ng-model="xsjhjson1.TGBFB" ng-change="BfbCheck('TGBFB')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" /> <text>%</text></p> @*<p class="uppp" ng-if="!(xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">确认</p>*@
                          </div>
                      </div>
                  </div>

                  <div class="projectLeader">
                      <p class="projectTip"> <img src="~/Images/jg.png" class="imgs" />默认项目总指标=参考指标金额*(1+提高百分比/100);总指标分解到门店后，总指标不可修改，但商品可增加指标，总指标随之增加。</p>
                      <div class="leaderValues">
                          <p class="leaderTit"> <img src="~/Images/xmzzb@2xs.png" class="imgs" /> 项目总指标</p>
                          <p class="leadervls">
                              <text>￥</text> <input type="text" ng-model="xsjhjson1.XSNET" maxlength="13" ng-change="BfbCheck('XSNET')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />
                          </p>
                      </div>
                      <div class="nextBox">
                          <p class="addButton" ng-if="(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" ng-click="Nexthtml()">下一步</p>@*此下一步不修改数据库*@
                          <p class="addButton" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" ng-click="UpdateXsnet()">下一步</p>@*此下一步需要更新销售目标金额*@
                      </div>

                  </div>
              </div>
              @*门店去添加*@
              <div class="tableBox" ng-show="mdaddShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 选择门店</div>
                      <div class="tabSelect btn-sx" ng-click="Mdsx()"> <p> <img src="~/Images/shanx@2xs.png" class="imgs" /> 筛选</p> </div>
                      <div class="hdsx" ng-show="mdTj" ng-click="$event.stopPropagation()" ng-style="{'display': mdTj ? 'block' : 'none'}">
                          <h6><button class="btn-xk" id="qingk" ng-click="MdReset()">清空</button><button class="btn" ng-click="Mdwc()">完成</button></h6>
                          <ul class="clearfix">
                              <li>
                                  <span>门店编码：</span>
                                  <p>
                                      <input type="search" id="MD_KHID" ng-model="MD.KHID" value="" placeholder="输入编码" autocomplete="off" style="width: 95%; margin-top: 8px; margin-bottom: 8px; border: 1px solid rgb(221, 221, 221);">
                                  </p>
                              </li>
                              <li>
                                  <span>门店名称：</span>
                                  <p>
                                      <input type="search" ng-model="MD.SNAME" value="" placeholder="输入编码" autocomplete="off" style="width: 95%; margin-top: 8px; margin-bottom: 8px; border: 1px solid rgb(221, 221, 221);">
                                  </p>
                              </li>
                              <li>
                                  <span>门店组：</span>
                                  <p>
                                      <select class="singleSelect" ng-model="MD.KHZID" style="width: 99%; margin-top: 8px; margin-bottom: 8px;">
                                          <option ng-if="KHZID.length > 0" ng-repeat="option in KHZID" value="{{option.ID_NR}}">{{option.SNAME}}</option>
                                          <option ng-if="KHZID.length === 0" disabled>加载中...</option>
                                      </select>
                                  </p>
                              </li>
                              <li>
                                  <span>主体类型：</span>
                                  <p>
                                      <select class="singleSelect" ng-model="MD.ZZTLX" style="width: 99%; margin-top: 8px; margin-bottom: 8px;">
                                          <option ng-if="ZZTLX.length > 0" ng-repeat="option in ZZTLX" value="{{option.ID_NR}}">{{option.ID_NR}}-{{option.SNAME}}</option>
                                          <option ng-if="ZZTLX.length === 0" disabled>加载中...</option>
                                      </select>
                                  </p>
                              </li>
                              <li>

                                  <span>运营部：</span>
                                  <p>
                                      <select class="singleSelect" ng-model="MD.YYBID" style="width: 99%; margin-top: 8px;margin-bottom: 8px; ">
                                          <option ng-if="YYBID.length > 0" ng-repeat="option in YYBID" value="{{option.ID_NR}}">{{option.ID_NR}}-{{option.SNAME}}</option>
                                          <option ng-if="YYBID.length === 0" disabled>加载中...</option>
                                      </select>
                                  </p>
                              </li>
                              <li>

                                  <span>课区：</span>
                                  <p>
                                      <select class="singleSelect" ng-model="MD.KQID" style="width: 99%; margin-top: 8px; ">
                                          <option ng-if="KQID.length > 0" ng-repeat="option in KQID" value="{{option.ID_NR}}">{{option.ID_NR}}-{{option.SNAME}}</option>
                                          <option ng-if="KQID.length === 0" disabled>加载中...</option>
                                      </select>
                                  </p>
                              </li>
                          </ul>
                      </div>

                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th><input type="checkbox" ng-model="MDAllSelected" ng-change="selectAllMD()" />全选</th>
                                  <th>门店编码</th>
                                  <th>门店名称</th>
                                  @*
                                  <th>门店组</th>*@
                                  <th>所属公司</th>
                                  <th>销售地区</th>
                                  @*
                                  <th>门店等级</th>*@
                                  <th>门店主体类型</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in mdList">
                                  <td><input type="checkbox" ng-model="item.selected" />{{ $index + 1 }}</td>
                                  <td>{{ item.KHID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  @*
                                  <td>{{ getSNAME('KHZID',item.KHZID) }}</td>*@
                                  <td>{{ GetGSNAME(item.GSID) }}</td>
                                  <td>{{ getSNAME('DQID',item.DQID) }}</td>
                                  @*
                                  <td>{{ getSNAME('QTLV',item.QTLV) }}</td>*@
                                  <td>{{ getSNAME('ZZTLX',item.ZZTLX)}}</td>
                              </tr>
                          </tbody>
                      </table>

                  </form>
                  <div class="buttonArea"><p class="cancels" ng-click="ShowHtml('XsjhRight')">返回</p><p class="addButton" ng-click="mdaddShowBtn()">确认</p></div>
              </div>
              @*门店编辑*@
              <div class="tableBox" ng-show="mdlistShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 已添加的门店</div>
                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th>序号</th>
                                  <th>门店编码</th>
                                  <th>门店名称</th>
                                  <th>所属公司</th>
                                  <th>门店主体类型</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in xsjhjson2">
                                  <td>{{ $index + 1 }}</td>
                                  <td>{{ item.KHID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  <td>{{ GetGSNAME(item.GSID) }}</td>
                                  <td>{{ getSNAME('ZZTLX',item.ZZTLX)}}</td>
                                  <td>
                                      <img class="hui" src="~/Images/caozuo-hui.png" />
                                      <img class="lan" src="~/Images/caozuo-lan.png" style="display:none" />
                                      <ol class="ol" style="display:none" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">
                                          <li ng-click="DelMd($index)"><img src="~/Images/shanchudju.png" />删除</li>
                                      </ol>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                  </form>
                  <div class="buttonArea" style="padding-top: 18px;"><p class="cancels" ng-click="ClearData('MD')" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">清空</p><p class="addButton" ng-click="ShowHtml('XsjhRight')">返回</p></div>
              </div>
              @*品类去添加*@
              <div class="tableBox" ng-show="pladdShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 选择品类</div>
                      <div class="tabSelect btn-sx" ng-click="Plsx()"> <p> <img src="~/Images/shanx@2xs.png" class="imgs" /> 筛选</p> </div>
                      <div class="hdsx" ng-show="plTj" ng-click="$event.stopPropagation()" ng-style="{'display': plTj ? 'block' : 'none'}">
                          <h6><button class="btn-xk" id="qingk" ng-click="PlReset()">清空</button><button class="btn" ng-click="Plwc()">完成</button></h6>
                          <ul class="clearfix">
                              <li>
                                  <span>品类编码：</span>
                                  <p>
                                      <input type="search" id="PL_PLID" ng-model="PL.PLID" value="" placeholder="输入编码" autocomplete="off" style="width: 240px;">
                                  </p>
                              </li>
                              <li>
                                  <span>品类名称：</span>
                                  <p>
                                      <input type="search" id="PL_SNAME" ng-model="PL.SNAME" value="" placeholder="输入名称" autocomplete="off" style="width: 240px;">
                                  </p>
                              </li>

                          </ul>
                      </div>

                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th><input type="checkbox" ng-model="PLAllSelected" ng-change="selectAllPL()" />全选</th>
                                  <th>品类编码</th>
                                  <th>品类名称</th>
                                  <th>所属上级编码</th>
                                  <th>所属上级名称</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in plList">
                                  <td><input type="checkbox" ng-model="item.selected" ng-change="updateSelectionPL(item)" />{{ $index + 1 }}</td>
                                  <td>{{ item.PLID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  <td>{{ item.PLID_F !== 'none' ? item.PLID_F : '-----' }}</td>
                                  <td>{{ item.DISPLAYSNAME !== null ? item.DISPLAYSNAME : '-----' }}</td>
                              </tr>
                          </tbody>
                      </table>

                  </form>
                  <div class="buttonArea"><p class="cancels" ng-click="ShowHtml('XsjhRight')">返回</p><p class="addButton" ng-click="pladdShowBtn()">确认</p></div>

              </div>
              @*品类去编辑*@
              <div class="tableBox" ng-show="pllistShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 已添加的品类</div>
                      @*<p class="addButton"> 添加门店</p>*@
                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th>序号</th>
                                  <th>品类编码</th>
                                  <th>品类名称</th>
                                  <th>所属上级编码</th>
                                  <th>所属上级名称</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in xsjhjson3">
                                  <td>{{ $index + 1 }}</td>
                                  <td>{{ item.PLID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  <td>{{ item.PLID_F !== 'none' ? item.PLID_F : '-----' }}</td>
                                  <td>{{ item.DISPLAYSNAME !== null ? item.DISPLAYSNAME : '-----' }}</td>
                                  <td>
                                      <img class="hui" src="~/Images/caozuo-hui.png" />
                                      <img class="lan" src="~/Images/caozuo-lan.png" style="display:none" />
                                      <ol class="ol" style="display:none" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">
                                          <li ng-click="DelPl($index)"><img src="~/Images/shanchudju.png" />删除</li>
                                      </ol>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                  </form>
                  <div class="buttonArea"><p class="cancels" ng-click="ClearData('PL')" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">清空</p><p class="addButton" ng-click="ShowHtml('XsjhRight')">返回</p></div>
              </div>
              @*商品添加*@
              <div class="tableBox" ng-show="spaddShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 选择商品</div>
                      <div class="tabSelect btn-sx" ng-click="DrLs()" style="margin-left: 250px;"> <p>  导入历史项目</p> </div>
                      <div class="tabSelect btn-sx" ng-click="Spsx()"> <p> <img src="~/Images/shanx@2xs.png" class="imgs" /> 筛选</p> </div>
                      <div class="hdsx" ng-show="spTj" ng-click="$event.stopPropagation()" ng-style="{'display': spTj ? 'block' : 'none'}">
                          <h6><button class="btn-xk" id="qingk" ng-click="SpReset()">清空</button><button class="btn" ng-click="Spwc()">完成</button></h6>
                          <ul class="clearfix">
                              <li>
                                  <span>商品编码：</span>
                                  <p>
                                      <input type="search" ng-model="SP.SPID" id="SP_SPID" value="" placeholder="输入编码" autocomplete="off" style="width: 96%; margin-top: 8px; margin-bottom: 9px; border: 1px solid rgb(221, 221, 221); ">
                                  </p>
                              </li>
                              <li>
                                  <span>商品名称：</span>
                                  <p>
                                      <input type="search" ng-model="SP.SNAME" id="SP_SNAME" value="" placeholder="输入名称" autocomplete="off" style="width: 96%; margin-top: 8px; margin-bottom: 9px; border: 1px solid rgb(221, 221, 221); ">
                                  </p>
                              </li>
                              <li>
                                  <span>商品品类：</span>
                                  <p>
                                      <input type="search" ng-model="SP.PLSNAME" id="SP_PLSNAME" value="" placeholder="输入品类" autocomplete="off" style="width: 96%; margin-top: 8px; margin-bottom: 9px; border: 1px solid rgb(221, 221, 221); ">
                                  </p>
                              </li>
                              <li>

                                  <span>商品类型：</span>
                                  <p>
                                      <select class="singleSelect" ng-model="SP.PRODUCT_TYPE" style="width: 100%; margin-top: 8px; ">
                                          <option ng-if="PRODUCT_TYPE.length > 0" ng-repeat="option in PRODUCT_TYPE" value="{{option.ID_NR}}">{{option.ID_NR}}-{{option.SNAME}}</option>
                                          <option ng-if="PRODUCT_TYPE.length === 0" disabled>加载中...</option>
                                      </select>
                                  </p>
                              </li>
                              <li>
                                  <span>商品建档日期：</span>
                                  <p><b><img src="~/Images/youzjtou.png" style="width: 18px; height: 18px; vertical-align: middle;" /><input type="date" ng-model="CXSJ.DATE_LR1" style="border: 1px solid rgb(221, 221, 221); box-sizing: border-box; width:300px;" /></b><b><img src="~/Images/youzjtou.png" style="width: 18px; height: 18px; vertical-align: middle;" /><input type="date" ng-model="CXSJ.DATE_LR2" style="border: 1px solid rgb(221, 221, 221); box-sizing: border-box;width:282px;" /></b></p>
                              </li>
                              <li>
                                  <span><input type="checkbox" class="switch" ng-model="SP.YN_JL" />是否节令</span>
                              </li>
                          </ul>
                      </div>

                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th><input type="checkbox" ng-model="SPAllSelected" ng-change="selectAllSP()" />全选</th>
                                  <th>商品编码</th>
                                  <th>商品名称</th>
                                  <th>商品品类</th>
                                  <th>规格</th>
                                  <th>库存单位</th>
                                  <th>建档日期</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in spList">
                                  <td><input type="checkbox" ng-model="item.selected" />{{ $index + 1 }}</td>
                                  <td>{{ item.SPID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  <td>{{ item.PLSNAME }}</td>
                                  <td>{{ item.SPECS }}</td>
                                  <td>{{ item.UNIT }}</td>
                                  <td>{{ item.DATE_LR }}</td>
                              </tr>
                          </tbody>
                      </table>
                  </form>
                  <div class="buttonArea"><p class="cancels" ng-click="ShowHtml('XsjhRight')">返回</p><p class="addButton" ng-click="spaddShowBtn()">确认</p></div>

              </div>
              @*商品编辑*@
              <div class="tableBox" ng-show="splistShow">
                  <div class="topTable">
                      <div class="topTitle"> <img src="~/Images/xzmds.png" class="imgs" /> 已添加的商品</div>
                      @*<p class="addButton"> 添加门店</p>*@
                  </div>
                  <form class="tableshow">
                      <table>
                          <thead>
                              <tr>
                                  <th>序号</th>
                                  <th>商品编码</th>
                                  <th>商品名称</th>
                                  <th>商品品类</th>
                                  <th>规格</th>
                                  <th>库存单位</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in xsjhjson4">
                                  <td>{{ $index + 1 }}</td>
                                  <td>{{ item.SPID }}</td>
                                  <td>{{ item.SNAME }}</td>
                                  <td>{{ item.PLSNAME }}</td>
                                  <td>{{ item.SPECS }}</td>
                                  <td>{{ item.UNIT }}</td>
                                  <td>
                                      <img class="hui" src="~/Images/caozuo-hui.png" />
                                      <img class="lan" src="~/Images/caozuo-lan.png" style="display:none" />
                                      <ol class="ol" style="display:none" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">
                                          <li ng-click="DelSp($index)"><img src="~/Images/shanchudju.png" />删除</li>
                                      </ol>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                  </form>
                  <div class="buttonArea"><p class="cancels" ng-click="ClearData('SP')" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')">清空</p><p class="addButton" ng-click="ShowHtml('XsjhRight')">返回</p></div>
              </div>
          </div>

      </div>
      <div class="middioValues2" ng-show="Xsjhhtml2">
          <div class="topTarget">
              <div class="itemCode"> <text>新</text> 项目编码：{{xsjhjson1.XMNO}}</div>
              <div class="codeAndSetBox">
                  <div class="codeContent" style=" width: 56%;box-sizing:border-box;">
                      <div class="lineTextBox">
                          <div class="codeItem">
                              <p class="top"> <img src="~/Images/lsckxse@2xs.png" class="imgs" /> 历史参考指标</p>
                              <p class="bto">￥{{xsjhjson1.XSNET_CK}}</p>
                          </div>
                          <div class="codeItem">
                              <p class="top">指标增加百分比</p>
                              <p class="bto">{{xsjhjson1.TGBFB}}% @*<img src="~/Images/tgao@2xs.png" class="imgs" />*@</p>
                          </div>
                          <div class="codeItem">
                              <p class="top">日均产值</p>
                              <p class="bto">￥{{RJCZ}} </p>
                          </div>
                          <div class="codeItem">
                              <p class="top">日均产量</p>
                              <p class="bto">{{RJCLData}}</p>
                          </div>
                      </div>

                  </div>

                  <div class="inputItem setBox" style=" box-sizing: border-box; width: 42%; display: block; padding-top: 0.6%;">
                      <div class="sdqrbox">
                          @*<input type="checkbox" ng-model="SDTJ" class="mr7px" />是否手动匹配 :  项目总指标 / 门店销售指标 / 商品销售指标*@
                      </div>

                      <div class="lineTextBox " id="addrightnum" style="flex-wrap: wrap; justify-content: start;">
                          <div class="codeItem">
                              <p class="top leftTt" style=" margin-right: 10px; display: inline-block;">项目总指标</p>
                              <text class="fuhao">￥</text>
                              @*<input type="text" style=" display: inline-block; width: 49%;" ng-model="xsjhjson1.XSNET" maxlength="13" ng-change="BfbCheck('XSNETTWO')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />*@
                              <span>{{xsjhjson1.XSNET}}</span>
                          </div>
                          <div class="codeItem">
                              <p class="top leftTt" style="display: inline-block;"> 活动费用</p>
                              <text class="fuhao">￥</text> <input type="text" style=" display: inline-block; width: 49%;" ng-model="xsjhjson1.XMHDNET" maxlength="13" ng-change="BfbCheck('XMHDNET')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />
                          </div>
                          <div class="codeItem">
                              <p class="top leftTt" style=" margin-right: 26px; display: inline-block;">折扣上限</p>
                              <text class="fuhao">￥</text> <input type="text" style=" display: inline-block; width: 48%;" ng-model="xsjhjson1.XMZKSX" maxlength="13" ng-change="BfbCheck('XMZKSX')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />%
                          </div>
                          <div class="codeItem">

                              <div class="sftbbox" ng-show="(xsjhjson1.BILL_STATUS=='1')&&xsjhjson1.YN_YTB=='N'&&xsjhjson1.YN_NY=='Y'">
                                  <div class="tit">同步到门店月度销售指标</div>
                                  <p class="addButton" style="margin-right:10px" ng-click="TBxsjh()">同步</p>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>

          </div>

          <div style="position:relative;">
              <div class="tabChange" id="zbdata" style="background: linear-gradient(90deg, #edeeff 0%, #fff 75%); ">
                  <div class="tabItem curDiv" id="Spdiv" @*onclick="SpdivC()" *@><img src="~/Images/gcghjh@2xs.png" class="imgs" /><p>商品指标</p></div>
                  <div class="tabItem" id="Mddiv" @*onclick="MddivC()" *@><img src="~/Images/xzmds.png" class="imgs" /> <p>门店指标</p></div>
                  <div class="tabItem" id="Pldiv" @*onclick="PldivC()" *@><img src="~/Images/pleizb@2xs.png" class="imgs" /> <p>品类指标</p></div>
                  <div class="tabItem" id="Cgdiv" @*onclick="CgdivC()" *@ ng-show="xsjhjson1.BILL_STATUS=='1'||xsjhjson1.BILL_STATUS=='9'"><img src="~/Images/gcghjh@2xs.png" class="imgs" /><p>采购计划</p></div>
                  <div class="tabItem" id="Bkdiv" @*onclick="BkdivC()" *@ ng-show="xsjhjson1.BILL_STATUS=='1'||xsjhjson1.BILL_STATUS=='9'"><img src="~/Images/gcghjh@2xs.png" class="imgs" /><p>备库产品</p></div>

              </div>

              <div class="inputItem setBox semrbslbox" ng-show="showMRBSL" style="box-sizing: border-box;  width: 50%; background: #fff;  ">
                  <div class="tit" style="width: 100px; margin-right: 100px;">门店销售总指标:{{MdxszbSum}}</div>
                  <div class="tit" style="width: 100px; margin-right: 90px;">门店指标占比之和:{{MdzbSum}}%</div>
                  <div class="tit" style="width: 100px; margin-right: 50px;">剩余占比:{{Mdsyzb}}%</div>
                  <div class="tit" style="width: 100px; margin-right: 30px;">设置默认报损率</div>
                  <input placeholder="请输入报损率" maxlength="5" style="width: 30%; !important;margin-right:10px"
                         ng-model="xsjhjson1.DEFAULTBSRATE" ng-change="BfbCheck('DEFAULTBSRATE')"
                         ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" />
              </div>
              <div class="inputItem setBox semrbslbox" ng-show="showspxszb" style="box-sizing: border-box;  width: 20%; background: #fff;  ">
                  <div class="tit">商品销售总指标:{{SpxszbSum}}</div>
              </div>
          </div>
          <div id="btbd" ng-show="mdzb">
              <div style="width:100%;overflow-x: auto;">
                  <table class="layui-table cptable" lay-skin="line" id="page5table">
                      <thead>
                          <tr>

                              <th style="width:40px;">序号</th>
                              <th style="width:120px;">门店编码</th>
                              <th style="width: 210px;">门店名称</th>
                              <th>开始日期</th>
                              <th>结束日期</th>
                              <th>参考开始日期</th>
                              <th>参考结束日期</th>
                              <th>日均指标金额</th>
                              <th>参考占比</th>
                              <th>参考销售金额</th>
                              <th>销售指标占比</th>
                              <th>销售指标</th>
                              <th>报损率上限</th>
                              <th>备注</th>
                              <th style="width:40px;">  </th>
                          </tr>
                      </thead>
                      <tbody id="page5table_tbody" class="gltobdy1">
                          @*ng-dblclick="GetmdData(item.KHID,$index)"*@
                          <tr ng-repeat="item in xsjhjson2">
                              <td>{{ $index + 1 }}</td>
                              <td style="width:120px;">{{ item.KHID }}</td>
                              <td style="width: 210px;">{{ item.SNAME }}</td>
                              <td>{{ item.SDATE }}</td>
                              <td>{{ item.EDATE }}</td>
                              <td>{{ item.SDATE_CK }}</td>
                              <td>{{ item.EDATE_CK }}</td>
                              <td>{{ item.RJZBNET }}</td>
                              <td>{{item.CK_MDZBZB}}%</td>
                              <td>{{ item.XSNET_CK }}</td>
                              <td>
                                  <input type="text" ng-model="item.MDZBZB" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="BfbCheck('MDZBZB',$index)" maxlength="5" style="width: 50px;min-width:50px;">%
                              </td>
                              <td>
                                  <input type="text" ng-model="item.XSNET" id="mdqty_{{$index}}" ng-keypress="CheckFoucs($event,$index,'MD')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="BfbCheck('KHIDXSNET',$index)" maxlength="13" style="width: 50px;">
                              </td>
                              <td>
                                  <input type="text" ng-model="item.BSRATE" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="BfbCheck('KHIDBSRATE',$index)" maxlength="5" style="width: 50px;min-width:50px;">%
                              </td>
                              <td>
                                  <input type="text" ng-model="item.NOTE" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" maxlength="50" style="width: 50px;">
                              </td>
                              <td style="width:40px;"><button class="xiangqingbtn" ng-click="GetmdData(item.KHID,$index)">详情</button></td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>

          <div class="" id="btbd" ng-show="plzb">
              <div style="width:100%;overflow-x: auto;">
                  <table class="layui-table cptable" lay-skin="line" id="page5table">
                      <thead>
                          <tr>

                              <th style="width:40px;">序号</th>
                              <th style="width:120px;">品类编码</th>
                              <th style="width: 210px;">品类名称</th>
                              <th>开始日期</th>
                              <th>结束日期</th>
                              <th>参考开始日期</th>
                              <th>参考结束日期</th>
                              <th>日均指标金额</th>
                              <th>品类指标占比</th>
                              <th>参考销售金额</th>
                              <th>销售指标</th>
                          </tr>
                      </thead>
                      <tbody id="page5table_tbody" class="gltobdy1">
                          <tr ng-repeat="item in xsjhjson3">
                              <td>{{ $index + 1 }}</td>
                              <td style="width:120px;">{{ item.PLID }}</td>
                              <td style="width: 210px;">{{ item.SNAME }}</td>
                              <td>{{ item.SDATE }}</td>
                              <td>{{ item.EDATE }}</td>
                              <td>{{ item.SDATE_CK }}</td>
                              <td>{{ item.EDATE_CK }}</td>
                              <td>{{ item.RJZBNET }}</td>
                              <td>{{ item.MDZBZB }}%</td>
                              <td>{{ item.XSNET_CK }}</td>
                              <td>
                                  {{item.XSNET}}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>

          <div id="btbd" ng-show="spzb">
              <div style="width:100%;overflow-x: auto;">
                  <table class="layui-table cptable" lay-skin="line" id="page5table">
                      <thead>
                          <tr>
                              <th style="width:40px;">序号</th>
                              <th style="width:120px;">商品编码</th>
                              <th style="width: 210px;">商品名称</th>
                              <th>开始日期</th>
                              <th>结束日期</th>
                              <th>参考开始日期</th>
                              <th>参考结束日期</th>
                              <th>参考销售金额</th>
                              <th>销售指标金额</th>
                              <th>参考销售数量</th>
                              <th>销售指标数量</th>
                              <th>指标单价金额</th>
                              <th>日均指标产量</th>
                          </tr>
                      </thead>
                      <tbody id="page5table_tbody" class="gltobdy1">
                          <tr ng-repeat="item in xsjhjson4">
                              <td>{{ $index + 1 }}</td>
                              <td style="width:120px;">{{ item.SPID }}</td>
                              <td style="width: 210px;">{{ item.SNAME }}</td>
                              <td>{{ item.SDATE }}</td>
                              <td>{{ item.EDATE }}</td>
                              <td>{{ item.SDATE_CK }}</td>
                              <td>{{ item.EDATE_CK }}</td>
                              <td>{{ item.XSNET_CK }}</td>
                              <td>
                                  {{ item.XSNET}}
                              </td>
                              <td>{{ item.XSQTY_CK }}</td>
                              <td>
                                  <input type="text" ng-model="item.XSQTY" id="spqty_{{$index}}" ng-keypress="CheckFoucs($event,$index,'SP')" ng-disabled="xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q'" ng-change="BfbCheck('SPIDXSQTY',$index)" maxlength="13" style="width: 50px;">
                              </td>
                              <td>{{ item.PRICE }}</td>
                              <td>{{ item.RJZBQTY }}</td>

                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>
          @*<form class="tableshow" style="margin-top:0;height:345px" ng-show="cgjh">
              <table>
                  <thead>
                      <tr>
                          <th>序号</th>
                          <th>工厂</th>
                          <th>商品编码</th>
                          <th>商品名称</th>
                          <th>规格</th>
                          <th>单位</th>
                          <th>数量</th>
                          <th>进价</th>
                          <th>进价金额</th>
                          <th>供应商</th>
                          <th>合同</th>
                          <th>当前库存</th>
                          <th>最大库存</th>
                          <th>最小库存</th>
                          <th>安全库存</th>
                          <th>预警说明</th>

                      </tr>
                  </thead>
                  <tbody>
                      <tr ng-repeat="item in xsjhjsoncgjh" style="color:{{item.BGCOLOR }}">
                          <td>{{ $index + 1 }}</td>
                          <td>{{ item.GCID_BHSNAME }}</td>
                          <td>{{ item.SPID_YL }}</td>
                          <td>{{ item.SPID_YLSAME }}</td>
                          <td>{{ item.SPECS }}</td>
                          <td>{{ item.UNIT }}</td>
                          <td>{{ item.YLQTY }}</td>
                          <td>{{ item.HTCOST }}</td>
                          <td>{{ item.HTNET }}</td>
                          <td>
                              {{item.GYSID}}-{{ item.GYSIDSNAME}}
                          </td>
                          <td>{{ item.HTID }}</td>
                          <td>{{ item.KCQTY }}</td>
                          <td>{{ item.MAXKCQTY }}</td>
                          <td>{{ item.MINKCQTY }}</td>
                          <td>{{ item.AQKCQTY }}</td>
                          <td>{{ item.YJSM }}</td>
                      </tr>
                  </tbody>
              </table>
          </form>*@
          <div class="" id="btbd" ng-show="cgjh">
              <div style="width:100%;overflow-x: auto;">
                  <table class="layui-table cptable" lay-skin="line" id="page5table">
                      <thead style="width: 1740px; ">
                          <tr>
                              <th style="width:40px;">序号</th>
                              <th style="width:120px;">工厂</th>
                              <th style="width:120px;">商品编码</th>
                              <th style="width: 210px;">商品名称</th>
                              <th>规格</th>
                              <th>单位</th>
                              <th>数量</th>
                              <th>进价</th>
                              <th>进价金额</th>
                              <th style="width:240px;">供应商</th>
                              <th>合同</th>
                              <th>当前库存</th>
                              <th>最大库存</th>
                              <th>最小库存</th>
                              <th>安全库存</th>
                              <th>预警说明</th>
                          </tr>
                      </thead>
                      <tbody id="page5table_tbody" class="gltobdy1" style="width:1740px;">
                          <tr ng-repeat="item in xsjhjsoncgjh" style="color:{{item.BGCOLOR}}">
                              <td>{{ $index + 1 }}</td>
                              <td style="width:120px;">{{ item.GCID_BHSNAME }}</td>
                              <td style="width: 120px;">{{ item.SPID_YL }}</td>
                              <td style="width: 210px;" class="showslh" title="{{ item.SPID_YLSAME }}">{{ item.SPID_YLSAME }}</td>
                              <td>{{ item.SPECS }}</td>
                              <td>{{ item.UNIT }}</td>
                              <td>{{ item.YLQTY }}</td>
                              <td>{{ item.HTCOST }}</td>
                              <td>{{ item.HTNET }}</td>
                              <td style="width:240px;" class="showslh" title="{{item.GYSID}}-{{ item.GYSIDSNAME}}">
                                  {{item.GYSID}}-{{ item.GYSIDSNAME}}
                              </td>
                              <td>{{ item.HTID }}</td>
                              <td>{{ item.KCQTY }}</td>
                              <td>{{ item.MAXKCQTY }}</td>
                              <td>{{ item.MINKCQTY }}</td>
                              <td>{{ item.AQKCQTY }}</td>
                              <td>{{ item.YJSM }}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>

          @*<form class="tableshow" style="margin-top:0;height:345px" ng-show="bkcp">
              <table>
                  <thead>
                      <tr>

                          <th>序号</th>
                          <th>工厂</th>
                          <th>备库产品</th>
                          <th>名称</th>
                          <th>规格</th>
                          <th>单位</th>
                          <th>数量</th>
                          <th>日结备库指标数量</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr ng-repeat="item in xsjhjsonbkcp">
                          <td>{{ $index + 1 }}</td>
                          <td>{{ item.GCIDNAME }}</td>
                          <td>{{ item.SPID }}</td>
                          <td>{{ item.SNAME }}</td>
                          <td>{{ item.SPECS }}</td>
                          <td>{{ item.UNIT }}</td>
                          <td>{{ item.QTY }}</td>
                          <td>{{ item.RJBKZBSL }}</td>


                      </tr>
                  </tbody>
              </table>
          </form>*@
          <div id="btbd" ng-show="bkcp">
              <div style="width:100%;overflow-x: auto;">
                  <table class="layui-table cptable" lay-skin="line" id="page5table">
                      <thead>
                          <tr>

                              <th style="width:40px;">序号</th>
                              <th>工厂</th>
                              <th>备库产品</th>
                              <th>名称</th>
                              <th>规格</th>
                              <th>单位</th>
                              <th>数量</th>
                              <th>日结备库指标数量</th>
                          </tr>
                      </thead>
                      <tbody id="page5table_tbody" class="gltobdy1">
                          <tr ng-repeat="item in xsjhjsonbkcp">
                              <td>{{ $index + 1 }}</td>
                              <td>{{ item.GCIDNAME }}</td>
                              <td>{{ item.SPID }}</td>
                              <td>{{ item.SNAME }}</td>
                              <td>{{ item.SPECS }}</td>
                              <td>{{ item.UNIT }}</td>
                              <td>{{ item.QTY }}</td>
                              <td>{{ item.RJBKZBSL }}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>
          <div class="buttonArea" style="background:none">
              <p class="cancels" ng-click="Prohtml()">上一步</p>
              <p class="addButton" style="margin-right:10px" ng-if="!(xsjhjson1.BILL_STATUS=='9'||xsjhjson1.BILL_STATUS=='1'||Flag=='Q')" ng-click="UpdateMxb()">保存</p>
              <p class="addButton" ng-if="!(xsjhjson1.BILL_STATUS=='1'||xsjhjson1.BILL_STATUS=='9'||Flag=='Q')" ng-click="YNSH()">审核</p>
              <p class="addButton" ng-if="xsjhjson1.BILL_STATUS=='1'" ng-click="YNZF()">作废</p>

          </div>
      </div>

      <div class="bg seemore" ng-show="MDSHOW">
          <div class="moreBox" style="width:70%;">
              <div class="titles">
                  <p class="lefts">
                      <img src="~/Images/feiyyy.png" class="imgss" />  门店商品/品类信息
                  </p>
              </div>
              <div style="display:flex;height:90%;">
                  <div class="tableShowMore" id="xqshowtable">
                      <table class="">
                          <thead>
                              <tr>
                                  <th style="width:120px;">商品编码</th>
                                  <th style="width: 210px;">商品名称</th>
                                  <th>销量指标</th>
                                  <th>销售指标</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in mdsplist">
                                  <td style="width:120px;">
                                      {{item.SPID}}
                                  </td>
                                  <td style="width: 210px;">
                                      {{item.SNAME}}
                                  </td>
                                  <td>{{item.XSQTY}}</td>
                                  <td>￥{{item.XSNET}}</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="tableShowMore" style="margin-left: 100px;" id="xqshowtable">
                      <table class="">
                          <thead>
                              <tr>
                                  <th style="width:120px;">品类编码</th>
                                  <th style="width:200px;">品类名称</th>
                                  <th>销售指标</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="item in mdpllist">
                                  <td style="width:120px;">
                                      {{item.PLID}}
                                  </td>
                                  <td style="width: 200px;">
                                      {{item.SNAME}}
                                  </td>
                                  <td>￥{{item.XSNET}}</td>
                              </tr>

                          </tbody>
                      </table>
                  </div>
              </div>

              <div class="buttonArea" style="padding-top:15px;">
                  <p class="addButton" ng-click="closeMore()">关闭</p>
              </div>
          </div>

      </div>
      <div class="bg seemore" ng-show="LSXMSHOW">
          <div class="moreBox" style="width: 85%;">
              <div class="titles">
                  <p class="lefts">
                      <img src="~/Images/feiyyy.png" class="imgss" />  历史项目
                  </p>

              </div>
              <ul class="clearfix" style="display:flex;align-items:center">
                  <li style="margin-top:5px">

                      <span>项目编码</span>
                      <input type="text" ng-model="QUERYLS.XMNO" style="border: 1px solid rgb(221, 221, 221);" />
                  </li>
                  <li style="margin-top:5px;margin-left:6px">
                      <span>项目名称</span>
                      <input type="text" ng-model="QUERYLS.XMNAME" style="border: 1px solid rgb(221, 221, 221);" />
                  </li>
                  <li style="margin-left:10px" ng-click="QueryLsClik()" class="addButton">查询</li>
              </ul>
              <div class="tableShowMore" style="height: 80%;overflow:auto">
                  <table>
                      <thead>
                          <tr>
                              <th>序号</th>
                              <th>项目编号</th>
                              <th>项目名称</th>
                              <th>项目描述</th>
                              <th>开始日期</th>
                              <th>截止日期</th>
                              <th>状态</th>
                              <th>项目录入人</th>
                              <th>项目录入日期</th>
                              <th>操作</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr ng-repeat="item in lsxmxsjh">
                              <td> {{$index+1}}</td>
                              <td>{{item.XMNO}}</td>
                              <td>{{item.XMNAME}}</td>
                              <td title="{{item.XMCOMM}}">{{item.XMCOMM.substr(0,30) }}{{item.XMCOMM.length>30?'...':''}}</td>
                              <td>{{item.SDATE}}</td>
                              <td>{{item.EDATE}}</td>
                              <td>{{item.BILL_STATUSNAME}}</td>
                              <td>{{item.ID_RY_LRSNAME }}</td>
                              <td>{{item.DATE_LR }}</td>
                              <td>
                                  <button class="xiangqingbtn" style="width: 30px; background: #4E55FF;" ng-click="Qdlsxm(item.XMNO)">选择</button>
                              </td>

                          </tr>
                  </table>
              </div>
              <div class="buttonArea">
                  <p class="addButton" ng-click="closeMoreLs()">关闭</p>
              </div>
          </div>

      </div>

      <div class="yqzf tisxx" style="z-index: 1000;">
          <h4><img src="~/Images/tishi-icon.png" />提示<button class="close" ng-click="confirmTZ()">×</button></h4>
          @*<h1>活动延期</h1>*@
          <p class="nr" style="word-wrap: break-word; width: 100%; overflow: auto; max-height: 300px;"></p>
          <p class="sub" style="margin-top:20px">
              @*<button class="btn btn-qx">取消</button>*@
              <button class="btn" ng-click="confirmTZ()">确认</button>
          </p>
      </div>
      <div class="yqzf2 tisxx tishi2" ng-show="showts2" ng-style="{'display': showts2 ? 'block' : 'none'}">
          <h4><img src="~/Images/tishi-icon.png" />提示<button class="close" ng-click="cancel2()">×</button></h4>
          <p class="nr2 tishinr2"></p>
          <p class="sub" style="margin-top:18px">
              <button class="btn btn-wk" ng-click="cancel2()">取消</button>
              <button class="btn" ng-click="confirm2()">确认</button>
          </p>
      </div>
  </div>
</section>


<script>
  $(function () {
      $('.lefter ul > li:eq(1)').toggleClass('curr');
      $('.lefter ul > li:eq(1)> ol> li:eq(0)').toggleClass('curr');
      $(".lefter ul li.curr").each(function () {
          $(this).find('ol').css('display', 'block');
      });
      $(".lefter li p").on('click', function () {
          $('.lefter').removeClass('curr');
      });
  })

  var app = angular.module('myApp', []);
  app.controller('myCtrl', function ($scope, $timeout, $filter) {
      $scope.Flag = '@ViewBag.Flag';//flag=="U" 修改页面  flag=="Q" 查看页面
      $scope.Bill = '@ViewBag.Bill';//如果是修改页面跳过来就行项目编号
      $scope.TBYEARLIST = JSON.parse('@Html.Raw(ViewBag.Year)');
      $scope.FESTIVAL_ID = JSON.parse('@Html.Raw(ViewBag.Jr)');
      $scope.Xsjhhtml1 = true;//第一个页面
      $scope.Xsjhhtml2 = false;//第二个页面
      $scope.xsjhjson1 = {};//主表
      $scope.mdzb = false;//下一页的列表是否显示
      $scope.plzb = false;//下一页的列表是否显示
      $scope.spzb = true;//下一页的列表是否显示
      $scope.qhisclick = false;//查询参考值按钮防止多次点击
      $scope.LSXMSHOW = false;
      $scope.lsxmxsjh = [];
      $scope.QUERYLS = {};
      if ($scope.Flag == "U" || $scope.Flag == "Q") {
          $scope.xsjhjson1.XMNO = $scope.Bill;
      }
      //初始化
      $scope.xsjhjson1.YN_DP = 'Y'
      $scope.xsjhjson2 = [];//门店表
      $scope.xsjhjson3 = [];//品类表
      $scope.xsjhjson4 = [];//商品表
      $scope.xsjhjsoncgjh = [];
      $scope.xsjhjsonbkcp = [];
      $scope.SHFlag = false;//能否审核
      $scope.JL = false;//节令下拉是否显示
      $scope.JlSDATE = null;
      $scope.JlEDATE = null;
      $scope.showMRBSL = false;//是否显示 "设置默认报损率"
      $scope.showspxszb = true;//是否显示商品销售总指标
      $scope.MdxszbSum = 0;
      $scope.SpxszbSum = 0;
      $scope.MdzbSum = 100;
      $scope.Mdsyzb = 0;
      //提示弹窗
      $scope.showts2 = false;
      $scope.confirm2 = () => {
          $scope.cancel2();
      }
      $scope.cancel2 = () => {
          $scope.showts2 = false;
          $('.tishinr2').text('');
          $scope.confirm2 = () => {
              $scope.cancel2();
          }
      }
      $scope.YNSH = function () {
          if (!$scope.SHFlag) {
              $scope.ShowMsg("请先保存");
              return;
          }
          $scope.showts2 = true;
          showOverlay();
          $('.tishinr2').text("确定是否审核项单据");
          $scope.confirm2 = () => {
              $scope.cancel2();
              $scope.SH();
          }
          return;
      }
      $scope.YNZF = function () {
          $scope.showts2 = true;
          showOverlay();
          $('.tishinr2').text("确定是否作废单据");
          $scope.confirm2 = () => {
              $scope.cancel2();
              $scope.ZF();
          }
          return;
      }
      $scope.CheckFoucs = (e, idx, type) => {
          if (e.keyCode == "13") {
              if (type == "SP") {
                  if (idx != $scope.xsjhjson4.length - 1) {
                      var inputs = $("#spqty_" + (idx + 1));
                      inputs.focus();
                  }
              }
              if (type == "MD") {
                  if (idx != $scope.xsjhjson2.length - 1) {
                      var inputs = $("#mdqty_" + (idx + 1));
                      inputs.focus();
                  }
              }
          }
      }
      //选择项目类型
      $scope.SelectType = () => {
          //节令
          if ($scope.xsjhjson1.XMTYPE == "XM_3") {
              $scope.JL = true;
          } else {
              $scope.JL = false;
              $scope.xsjhjson1.FESTIVAL_ID = "";
          }
      }
      $scope.SelectJl = () => {
          if (!($scope.xsjhjson1.SDATE || $scope.xsjhjson1.EDATE)) {
              $scope.xsjhjson1.FESTIVAL_ID = "";
              $scope.ShowMsg("请先输入开始日期/截止日期");
              return
          }
          $scope.GetJlDate();
      }
      $scope.GetJlDate = () => {
          $.ajax
              ({
                  type: "post",
                  url: "/Pro_Sale_Plan/GetJlDate",
                  dataType: 'json',
                  async: false,
                  data: {
                      year: dateToCustomString($scope.xsjhjson1.SDATE),
                      festival_id: $scope.xsjhjson1.FESTIVAL_ID,
                  },
                  success: function (res) {
                      GetLogin(res);

                      if (res.length > 0) {
                          $scope.JlSDATE = res[0]["SDATE"];
                          $scope.JlEDATE = res[0]["EDATE"];
                      } else {
                          if ($scope.Flag != "Q") {
                              $scope.ShowMsg("日期节令中不存在当前选择的节令");
                              $scope.xsjhjson1.FESTIVAL_ID = "";
                          }
                          return;
                      }
                  }
              })
      }
      $scope.GetNY = () => {
          //默认给下个月
          if ($scope.xsjhjson1.YN_NY == "Y") {

              let d = new Date();
              let month = (d.getMonth() + 2).toString();
              let year = d.getFullYear().toString();
              $scope.xsjhjson1.TBYEAR = year;
              $scope.xsjhjson1.TBMONTH = month;
              // 获取当前月份的第一天
              var firstDay = new Date(d.getFullYear(), d.getMonth() + 1, 1);

              // 获取当前月份的最后一天
              // 注意：月份是从0开始的，所以+1表示下个月，0表示上个月的最后一天
              var lastDay = new Date(d.getFullYear(), d.getMonth() + 2, 0);
              $scope.xsjhjson1.SDATE = new Date(dateToCustomString(firstDay));
              $scope.xsjhjson1.EDATE = new Date(dateToCustomString(lastDay))
              $scope.GetCKDATE();
          } else {
              $scope.xsjhjson1.TBYEAR = "";
              $scope.xsjhjson1.TBMONTH = "";
              $scope.xsjhjson1.SDATE = "";
              $scope.xsjhjson1.EDATE = "";
          }
      }
      function subtractMonth(date) {
          if (!date) {
              return;
          }
          let newDate = new Date(date); // 复制原始日期对象
          newDate.setDate(1); // 将日期设置为上一个月的第一天
          newDate.setMonth(newDate.getMonth() - 1); // 获取上一个月的日期

          let year = newDate.getFullYear()
          let month = newDate.getMonth();
          let nextMonth = new Date(year, month + 1, 1); // 下一个月的第一天
          let lastDay = new Date(nextMonth - 1 * 24 * 60 * 60 * 1000); // 减去一天得到本月的最后一天
          let targetDay = date.getDate(); // 获取当前日期的天数
          //获取减去后的天数大于当前月份的最后一天则默认为最后一天
          if (targetDay > lastDay.getDate()) {
              targetDay = lastDay.getDate();
          }
          newDate.setDate(targetDay); // 尝试设置为我们想要的日  如果当前日期是2024-07-26  选择的是2024-10-01  那么参考日期需一直递归到2024-07-01
          if (parseFloat(newDate.getFullYear().toString() + newDate.getMonth().toString()) > parseFloat(new Date().getFullYear().toString() + new Date().getMonth().toString())) {
              return subtractMonth(newDate);
          }
          return newDate;
      }
      function MonthLast() {
          //如果参考时间已经推到7.1-7.31 但是当前时间如果为7.20 那么还需要再往前推一个月
          let date1 = new Date($scope.xsjhjson1.SDATE_CK);
          let date2 = new Date($scope.xsjhjson1.EDATE_CK);
          var dateT = new Date(GetDate());

          if (dateT >= date1 && dateT <= date2) {
              $scope.xsjhjson1.SDATE_CK = subtractMonth(date1)
              $scope.xsjhjson1.EDATE_CK = subtractMonth(date2)
          }
      }
      //根据选择的日期默认复制参考日期
      $scope.GetCKDATE = () => {
          //往前推一个月给参考值赋值
          $scope.xsjhjson1.SDATE_CK = subtractMonth($scope.xsjhjson1.SDATE);
          $scope.xsjhjson1.EDATE_CK = subtractMonth($scope.xsjhjson1.EDATE);
          MonthLast()
      }
      $scope.GetYEAR = () => {

          var firstDay = new Date($scope.xsjhjson1.TBYEAR, parseInt($scope.xsjhjson1.TBMONTH) - 1, 1);
          // 获取当前月份的最后一天
          // 注意：月份是从0开始的，所以+1表示下个月，0表示上个月的最后一天
          var lastDay = new Date($scope.xsjhjson1.TBYEAR, parseInt($scope.xsjhjson1.TBMONTH), 0);
          $scope.xsjhjson1.SDATE = new Date(dateToCustomString(firstDay));
          $scope.xsjhjson1.EDATE = new Date(dateToCustomString(lastDay))
          $scope.GetCKDATE();
          $scope.xsjhjson1.FESTIVAL_ID = "";
      }
      $scope.TBxsjh = () => {
          MyAjax.Ajax("/Pro_Sale_Plan/TBxsjh", {
              Xmno: $scope.xsjhjson1.XMNO,
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.GetData()
                      $scope.ShowMsg("同步成功");
                  } else {
                      $scope.ShowMsg("同步失败;" + res.msg);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      $scope.SH = () => {
          //if (!$scope.SHFlag) {
          //    $scope.ShowMsg("请先保存");
          //    return;
          //} else {
          MyAjax.Ajax("/Pro_Sale_Plan/ExecSH", {
              Xmno: $scope.xsjhjson1.XMNO,
              type: "WH"
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.GetData()
                      $scope.ShowMsg("审核成功");
                      $scope.GetCG()
                  } else {
                      $scope.ShowMsg(res.msg);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
          //}
      }
      $scope.ZF = () => {
          MyAjax.Ajax("/Pro_Sale_Plan/ExecZF", {
              Xmno: $scope.xsjhjson1.XMNO,
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.GetData()
                      $scope.ShowMsg("作废成功");
                  } else {
                      $scope.ShowMsg("作废失败;" + res.msg);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);

      }
      function stopPropagation(e) {
          e = e || window.event;
          if (e.stopPropagation) { //W3C阻止冒泡方法
              e.stopPropagation();
          } else {
              e.cancelBubble = true; //IE阻止冒泡方法
          }
      }
      $scope.DivClick = () => {
          $scope.SHFlag = false;
      }
      $scope.QueryClick = () => {
          $scope.QCFlag = false;//查询历史参考记录是否能点
      }
      function daysBetweenDates(date1, date2) {
          // 确保date1是开始日期，date2是结束日期
          const startDate = new Date(date1);
          const endDate = new Date(date2);

          // 计算时间差
          const diffTime = endDate - startDate;

          // 将毫秒转换为天
          const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); // 1000毫秒*3600秒*24小时

          return diffDays;
      }
      //获取最新数据
      $scope.RJCZ = 0;//日均产值
      $scope.RJCLData = 0;//日均产量
      //计算产值 产量
      $scope.GetCz = () => {
          $scope.RJCZ = parseFloat(parseFloat($scope.xsjhjson1.XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2);
          if (!$scope.RJCZ || isNaN($scope.RJCZ)) {
              $scope.RJCZ = 0;
          }
          let sum = 0;
          $scope.xsjhjson4.forEach(item => {
              if (item.XSQTY) {
                  sum = parseFloat(sum) + parseFloat(item.XSQTY);
              }
          });
          $scope.RJCLData = parseFloat(parseFloat(sum) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2);
          if ($scope.RJCLData == 0.00) {
              $scope.RJCLData = 0
          }
          $scope.$applyAsync();
      }
      $scope.GetCG = () => {
          MyAjax.Ajax("/Pro_Sale_Plan/GetXsjh_CG", {
              Xmno: $scope.xsjhjson1.XMNO,
          }, "POST", "json", function (res) {
              $timeout(function () {
                  $scope.xsjhjsoncgjh = JSON.parse(res.data);
                  $scope.xsjhjsonbkcp = JSON.parse(res.data2);
                  $scope.$applyAsync();
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);

      }
      $scope.ShowMsg = (text) => {
          $('.yqzf').show();
          showOverlay();
          $('.nr').text(text)
      }
      $scope.oldxsjhjson2 = []
      $scope.QHMD = () => {
          let qsum = 0;
          if (parseFloat($scope.oldxsnet) != parseFloat($scope.xsjhjson1.XSNET)) {
              for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                  if (i == $scope.xsjhjson2.length - 1) {
                      $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat($scope.xsjhjson1.XSNET) - parseFloat(qsum)).toFixed(2);
                      $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                      $scope.$applyAsync();
                  } else {
                      $scope.xsjhjson2[i].XSNET = parseFloat(($scope.xsjhjson2[i].MDZBZB / 100) * $scope.xsjhjson1.XSNET).toFixed(2);
                      $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                      qsum = parseFloat(parseFloat(qsum) + parseFloat($scope.xsjhjson2[i].XSNET));
                      $scope.$applyAsync();
                  }
              }
              $scope.GetMdSum();
              $scope.$applyAsync();
          }
      }
      $scope.GetData = () => {
          if ($scope.xsjhjson1.XMNO) {
              MyAjax.Ajax("/Pro_Sale_Plan/GetXsjh_01", {
                  Xmno: $scope.xsjhjson1.XMNO,
              }, "POST", "json", function (res) {
                  $timeout(function () {
                      if (res.code == "0") {
                          if (res.data.length > 0) {
                              $scope.xsjhjson1 = JSON.parse(res.data)[0];
                              $scope.oldxsnet = angular.copy($scope.xsjhjson1.XSNET);
                              //日期控件绑定数据需要newdate
                              $scope.xsjhjson1.SDATE = new Date($scope.xsjhjson1.SDATE);
                              $scope.xsjhjson1.EDATE = new Date($scope.xsjhjson1.EDATE);
                              if ($scope.xsjhjson1.XMTYPE == "XM_3") {
                                  $scope.JL = true;
                                  $scope.GetJlDate()
                              }
                              if ($scope.xsjhjson1.SDATE_CK) {
                                  $scope.xsjhjson1.SDATE_CK = new Date($scope.xsjhjson1.SDATE_CK);
                              }
                              if ($scope.xsjhjson1.EDATE_CK) {
                                  $scope.xsjhjson1.EDATE_CK = new Date($scope.xsjhjson1.EDATE_CK);
                              }
                              if ($scope.xsjhjson1.XSNET_CK && $scope.xsjhjson1.XSNET) {
                                  $scope.xsjhjson1.TGBFB = parseFloat(parseFloat(($scope.xsjhjson1.XSNET - $scope.xsjhjson1.XSNET_CK) / $scope.xsjhjson1.XSNET_CK) * 100).toFixed(2);
                              }
                              $scope.xsjhjson2 = JSON.parse(res.data2);
                              //let x2sum=0
                              if ($scope.xsjhjson1.XSNET_CK && $scope.xsjhjson1.XSNET) {
                                  if ($scope.xsjhjson2.length > 0) {
                                      if ($scope.xsjhjson2[0].XSNET == undefined || $scope.xsjhjson2[0].XSNET == "" && parseFloat($scope.xsjhjson2[0].XSNET) != 0) {
                                          //通过参考销售金额平均分配销售额
                                          var qsum = 0;
                                          for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                                              if (i == $scope.xsjhjson2.length - 1) {
                                                  $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat($scope.xsjhjson1.XSNET) - parseFloat(qsum)).toFixed(2);
                                                  $scope.xsjhjson2[i].MDZBZB = $scope.xsjhjson2[i].CK_MDZBZB;
                                                  $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                                              } else {
                                                  $scope.xsjhjson2[i].XSNET = parseFloat(($scope.xsjhjson2[i].CK_MDZBZB / 100) * $scope.xsjhjson1.XSNET).toFixed(2);
                                                  $scope.xsjhjson2[i].MDZBZB = $scope.xsjhjson2[i].CK_MDZBZB;
                                                  $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                                                  qsum = parseFloat(parseFloat(qsum) + parseFloat($scope.xsjhjson2[i].XSNET)).toFixed(2);
                                              }
                                          }

                                      }
                                      $scope.oldxsjhjson2 = angular.copy($scope.xsjhjson2);
                                  }
                              }
                              $scope.$applyAsync();
                              $scope.xsjhjson4 = JSON.parse(res.data4);
                              $scope.xsjhjson3 = JSON.parse(res.data3);
                              let cxjsflag = "N";
                              for (var i = 0; i < $scope.xsjhjson4.length; i++) {
                                  if ($scope.xsjhjson4[i].XSQTY > 0) {
                                      cxjsflag = "Y";//如果存过进来就不重置
                                      break;
                                  }
                              }
                              if (cxjsflag == "N") {
                                  $scope.JSXSQTY();
                                  $scope.SPzbzb();
                              }
                              $scope.GetCz();
                              $scope.GetSpSum();
                              $scope.GetMdSum();
                              $scope.$applyAsync();
                          }
                      }
                  })
              }, function (data) {
                  MyAjax.myAlert(data);
              }, false);
          } else {
              //var Defaultsdate = new Date();
              //Defaultsdate.setMonth(Defaultsdate.getMonth() - 1);
              //var Defaultedate = new Date();
              //Defaultedate.setDate(Defaultedate.getDate() - 1);
              //$scope.xsjhjson1.SDATE_CK = new Date($filter('date')(Defaultsdate, 'yyyy-MM-dd'));
              //$scope.xsjhjson1.EDATE_CK = new Date($filter('date')(Defaultedate, 'yyyy-MM-dd'));
              $scope.xsjhjson1.YN_NY = "N";
          }

      }
      //获取单品得销售数量
      $scope.DPXSQTY = 0;
      $scope.JSXSQTY = () => {
          let xszqty = 0;
          let spsumnet = 0;
          for (var i = 0; i < $scope.xsjhjson4.length; i++) {
              if ((!$scope.xsjhjson4[i].XSNET_CK || !$scope.xsjhjson1.XSNET_CK || !$scope.xsjhjson1.XSNET || !$scope.xsjhjson4[i].PRICE) && i != $scope.xsjhjson4.length - 1) {
                  $scope.xsjhjson4[i].XSQTY = 0;
                  $scope.xsjhjson4[i].XSNET = 0;
              } else {
                  if (i == $scope.xsjhjson4.length - 1) {
                      $scope.xsjhjson4[i].XSNET = parseFloat(parseFloat($scope.xsjhjson1.XSNET) - parseFloat(spsumnet)).toFixed(2);;
                      $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : parseFloat(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE)).toFixed(2);
                      xszqty = parseFloat(xszqty) + parseFloat($scope.xsjhjson4[i].XSQTY);
                  } else {
                      $scope.xsjhjson4[i].XSQTY = Math.floor(parseFloat(($scope.xsjhjson4[i].XSNET_CK / $scope.xsjhjson1.XSNET_CK) * $scope.xsjhjson1.XSNET / $scope.xsjhjson4[i].PRICE));
                      $scope.xsjhjson4[i].XSNET = parseFloat(parseFloat($scope.xsjhjson4[i].XSQTY) * parseFloat($scope.xsjhjson4[i].PRICE)).toFixed(2);
                      xszqty = parseFloat(xszqty) + parseFloat($scope.xsjhjson4[i].XSQTY);
                      spsumnet = parseFloat(spsumnet) + parseFloat($scope.xsjhjson4[i].XSNET);
                  }
              }
          }
          $scope.oldxsjhjson4 = angular.copy($scope.xsjhjson4);
          $scope.DPXSQTY = xszqty;
      }
      //输入项目总指标刷新数据
      $scope.refshData = () => {
          if ($scope.xsjhjson1.XSNET_CK && $scope.xsjhjson1.XSNET) {
              if ($scope.xsjhjson2.length > 0) {
                  //通过参考销售金额平均分配销售额
                  let x2sum = 0;
                  for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                      if (i != $scope.xsjhjson2.length - 1) {
                          $scope.xsjhjson2[i].XSNET = Math.floor(parseFloat(($scope.xsjhjson2[i].XSNET_CK / $scope.xsjhjson1.XSNET_CK) * $scope.xsjhjson1.XSNET));
                          x2sum = parseFloat(x2sum) + parseFloat($scope.xsjhjson2[i].XSNET);
                      } else {
                          $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat($scope.xsjhjson1.XSNET) - parseFloat(x2sum)).toFixed(2);
                      }
                  }
                  $scope.oldxsjhjson2 = angular.copy($scope.xsjhjson2);
              }
          }
          $scope.JSXSQTY();
      }
      $scope.GetData();//加载数据
      $scope.MDSHOW = false;
      $scope.closeMoreLs = function () {
          $scope.LSXMSHOW = false;
          $scope.$applyAsync;
      }
      $scope.DrLs = () => {
          $scope.LSXMSHOW = true;
          $scope.QueryLsClik();
      }
      $scope.QueryLsClik = () => {
          MyAjax.Ajax("/Pro_Sale_Plan/Get_DrlsXsjh", {
              tjjson: JSON.stringify($scope.QUERYLS)
          }, "POST", "json", function (res) {
              $timeout(function () {
                  $scope.lsxmxsjh = res;
                  $scope.$applyAsync;
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      $scope.Qdlsxm = (xmno) => {
          MyAjax.Ajax("/Pro_Sale_Plan/Get_XmxsjhLsDrsp", {
              xmno: xmno
          }, "POST", "json", function (res) {
              $timeout(function () {
                  $scope.LSXMSHOW = false;
                  $scope.spList = res;
                  $scope.SPCheck();
                  $scope.$applyAsync;
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      $scope.GetmdData = (khid, index) => {
          console.log('index', index)
          $('.gltobdy1 tr').css('background', '#fff');
          $('.gltobdy1 tr').eq(index).css('background', '#F0F2FA');//改变列表 高亮

          $scope.MDSHOW = true;
          MyAjax.Ajax("/Pro_Sale_Plan/GetMdxsZb", {
              Xmno: $scope.xsjhjson1.XMNO, khid: khid
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.mdsplist = JSON.parse(res.data);
                      $scope.mdpllist = JSON.parse(res.data2);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      $scope.closeMore = function () {
          $scope.MDSHOW = false;
      }
      //品类/商品类别切换
      $scope.Yn_Dp_Check = () => {

          if ($scope.xsjhjson1.YN_DP == "Y") {
              $scope.xsjhjson3 = [];
          } else {
              $scope.xsjhjson4 = [];
          }
          $scope.ShowHtml('XsjhRight')
      }
      $("#zbdata div").on('click', function () {
          $scope.mdzb = false;
          $scope.plzb = false;
          $scope.spzb = false;
          $scope.bkcp = false;
          $scope.cgjh = false;
          $(this).addClass("curDiv").siblings().removeClass("curDiv");
          if ($(this).attr("id") == "Mddiv") {
              $scope.mdzb = true;
              $scope.showMRBSL = true;//是否显示 "设置默认报损率"
              $scope.showspxszb = false;
              $scope.QHMD();
          }
          else if ($(this).attr("id") == "Pldiv") {
              $scope.plzb = true;
              $scope.showMRBSL = false;//是否显示 "设置默认报损率"
              $scope.showspxszb = false;
          }
          else if ($(this).attr("id") == "Spdiv") {
              $scope.spzb = true;
              $scope.showMRBSL = false;//是否显示 "设置默认报损率"
              $scope.showspxszb = true;
          }
          else if ($(this).attr("id") == "Cgdiv") {
              $scope.cgjh = true;
              $scope.showMRBSL = false;//是否显示 "设置默认报损率"
              $scope.showspxszb = false;
          }
          else if ($(this).attr("id") == "Bkdiv") {
              $scope.bkcp = true;
              $scope.showMRBSL = false;//是否显示 "设置默认报损率"
              $scope.showspxszb = false;
          }
      });
      // MddivC=()=> {
      //    $("#Mddiv").removeClass("curDiv")
      //    $("#Pldiv").removeClass("curDiv");
      //    $("#Spdiv").removeClass("curDiv");
      //    $("#Cgdiv").removeClass("curDiv");
      //    $("#Bkdiv").removeClass("curDiv");
      //    $("#Mddiv").addClass("curDiv");
      //    $scope.mdzb = true;
      //    $scope.plzb = false;
      //     $scope.spzb = false;
      //     $scope.bkcp = false;
      //     $scope.cgjh = false;
      //}
      // PldivC=()=> {
      //    $("#Mddiv").removeClass("curDiv")
      //    $("#Pldiv").removeClass("curDiv");
      //     $("#Spdiv").removeClass("curDiv");
      //     $("#Cgdiv").removeClass("curDiv");
      //     $("#Bkdiv").removeClass("curDiv");
      //    $("#Pldiv").addClass("curDiv");
      //    $scope.mdzb = false;
      //    $scope.plzb = true;
      //     $scope.spzb = false;
      //     $scope.bkcp = false;
      //     $scope.cgjh = false;
      //}
      // SpdivC=()=> {
      //    $("#Mddiv").removeClass("curDiv")
      //    $("#Pldiv").removeClass("curDiv");
      //     $("#Spdiv").removeClass("curDiv");
      //     $("#Cgdiv").removeClass("curDiv");
      //     $("#Bkdiv").removeClass("curDiv");
      //    $("#Spdiv").addClass("curDiv");
      //    $scope.mdzb = false;
      //    $scope.plzb = false;
      //     $scope.spzb = true;
      //     $scope.bkcp = false;
      //     $scope.cgjh = false;
      //}
      //BkdivC = () => {
      //    $("#Mddiv").removeClass("curDiv")
      //    $("#Pldiv").removeClass("curDiv");
      //    $("#Spdiv").removeClass("curDiv");
      //    $("#Cgdiv").removeClass("curDiv");
      //    $("#Bkdiv").removeClass("curDiv");
      //    $("#Bkdiv").addClass("curDiv");
      //    $scope.mdzb = false;
      //    $scope.plzb = false;
      //    $scope.spzb = false;
      //    $scope.bkcp = true;
      //    $scope.cgjh = false;
      //}
      //CgdivC = () => {
      //    $("#Mddiv").removeClass("curDiv")
      //    $("#Pldiv").removeClass("curDiv");
      //    $("#Spdiv").removeClass("curDiv");
      //    $("#Cgdiv").removeClass("curDiv");
      //    $("#Bkdiv").removeClass("curDiv");
      //    $("#Cgdiv").addClass("curDiv");
      //    $scope.mdzb = false;
      //    $scope.plzb = false;
      //    $scope.spzb = false;
      //    $scope.bkcp = false;
      //    $scope.cgjh = true;
      //}
      $scope.Nexthtml = () => {
          $scope.GetData();
          if ($scope.xsjhjson1.BILL_STATUS == "1" || $scope.xsjhjson1.BILL_STATUS == "9") {
              $scope.GetCG();
          }
          $scope.Xsjhhtml1 = false;//第一个页面
          $scope.Xsjhhtml2 = true;//第二个页面
      }
      $scope.Prohtml = () => {
          $scope.GetData();
          $scope.Xsjhhtml1 = true;//第一个页面
          $scope.Xsjhhtml2 = false;//第二个页面
      }
      $scope.UpdateMxb = () => {
          stopPropagation()
          if (!$scope.checkData($scope.xsjhjson1.XSNET)) {
              $scope.ShowMsg("项目总销售指标有误");
              return;
          }
          if (!$scope.checkData($scope.xsjhjson1.XMHDNET)) {
              $scope.ShowMsg("项目活动费用有误");
              return;
          }
          if (!$scope.checkData($scope.xsjhjson1.XMZKSX)) {
              $scope.ShowMsg("项目折扣上限有误");
              return;
          }
          if ($scope.xsjhjson2.length == 0) {
              $scope.ShowMsg("请选择门店")
              return;
          } else {
              let errxs = "";
              let errbs = "";
              let errcks = "";
              for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                  if (!$scope.checkData($scope.xsjhjson2[i].XSNET_CK)) {
                      errcks += $scope.xsjhjson2[i].KHID + ","
                  }
                  if (!$scope.checkData2($scope.xsjhjson2[i].XSNET)) {
                      errxs += $scope.xsjhjson2[i].KHID + ","
                  }
                  if (!$scope.checkData($scope.xsjhjson2[i].BSRATE)) {
                      errbs += $scope.xsjhjson2[i].KHID + ","
                  }
              }
              if (errcks != "") {
                  $scope.ShowMsg("门店" + errcks + "参考指标有误,请重新查询历史参考销售额")
                  return;
              }
              if (errxs != "") {
                  $scope.ShowMsg(errxs + "销售指标输入有误,需为大于0的数")
                  return;
              }
              if (errbs != "") {
                  $scope.ShowMsg(errbs + "报损率上限输入有误")
                  return;
              }
              let s1 = 0;
              if ($scope.xsjhjson2.length > 0) {
                  for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                      s1 = s1 + parseFloat($scope.xsjhjson2[i].XSNET);
                  }
              }
              if (Math.abs(parseFloat(s1) - parseFloat($scope.xsjhjson1.XSNET)) > 0.3) {
                  $scope.ShowMsg("门店销售指标总和" + parseFloat(s1).toFixed(2) + "与项目总指标" + $scope.xsjhjson1.XSNET + "不匹配")
                  return;
              }
          }
          if ($scope.xsjhjson4.length == 0) {
              $scope.ShowMsg("请选择商品")
              return;
          } else {
              let errxs = "";
              let errcks = "";
              let errnet = "";
              for (var i = 0; i < $scope.xsjhjson4.length; i++) {
                  if (!$scope.checkData($scope.xsjhjson4[i].XSNET_CK)) {
                      errcks += $scope.xsjhjson4[i].SPID + ","
                  }
                  if (!$scope.checkData2($scope.xsjhjson4[i].XSQTY)) {
                      errxs += $scope.xsjhjson4[i].SPID + ","
                  }
                  if (!$scope.checkData2($scope.xsjhjson4[i].XSNET)) {
                      errnet += $scope.xsjhjson4[i].SPID + ","
                  }
              }
              if (errcks != "") {
                  $scope.ShowMsg("商品" + errcks + "参考指标有误,请重新查询历史参考销售额")
                  return;
              }
              if (errxs != "") {
                  $scope.ShowMsg("商品" + errxs + "销售指标输入有误,需为大于0的数")
                  return;
              }
              if (errnet != "") {
                  $scope.ShowMsg("商品" + errnet + "销售指标金额有误,需为大于0的数")
                  return;
              }
              let s1 = 0;
              if ($scope.xsjhjson4.length > 0) {
                  for (var i = 0; i < $scope.xsjhjson4.length; i++) {
                      s1 = parseFloat(s1) + parseFloat($scope.xsjhjson4[i].XSNET);
                  }
              }
              if (Math.abs(parseFloat(s1) - parseFloat($scope.xsjhjson1.XSNET)) > 0.3) {
                  $scope.ShowMsg("商品销售指标总和" + parseFloat(s1).toFixed(2) + "与项目总指标" + $scope.xsjhjson1.XSNET + "不匹配")
                  return;
              }
          }
          MyAjax.Ajax("/Pro_Sale_Plan/Update03_Xsnet", {
              Xmno: $scope.xsjhjson1.XMNO,
              Xsnet: $scope.xsjhjson1.XSNET,
              Xmhdnet: $scope.xsjhjson1.XMHDNET,
              Xmzksx: $scope.xsjhjson1.XMZKSX,
              xsjhjson2: JSON.stringify($scope.xsjhjson2),
              xsjhjson3: JSON.stringify($scope.xsjhjson3),
              xsjhjson4: JSON.stringify($scope.xsjhjson4)
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.GetData()
                      $scope.SHFlag = true;
                      $scope.ShowMsg("保存成功");
                  } else {
                      $scope.ShowMsg("保存失败;" + res.msg);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);

      }
      $scope.checkData = (obj) => {
          if (parseFloat(obj) == 0) {
              return true;
          }
          if (obj == undefined || obj == "") {
              return false;
          } else {
              return true;
          }
      }
      $scope.checkData2 = (obj) => {
          if (parseFloat(obj) == 0) {
              return false;
          }
          if (obj == undefined || obj == "") {
              return false;
          } else {
              return true;
          }
      }
      //修改目标销售金额
      $scope.UpdateXsnet = () => {
          if (!$scope.xsjhjson1.XMNO) {
              $scope.ShowMsg("请先保存数据");
              return
          }
          if (!$scope.checkData($scope.xsjhjson1.XSNET_CK)) {
              $scope.ShowMsg("请先查询历史参考销售额");
              return
          }
          if ((!$scope.xsjhjson1.XSNET) && $scope.xsjhjson1.XSNET == 0) {
              $scope.ShowMsg("项目总指标不能为空");
              return
          }
          MyAjax.Ajax("/Pro_Sale_Plan/Update01_Xsnet", {
              Xmno: $scope.xsjhjson1.XMNO,
              Xsnet: $scope.xsjhjson1.XSNET,
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.Xsjhhtml1 = false;//第一个页面
                      $scope.Xsjhhtml2 = true;//第二个页面
                      $scope.GetData();
                  } else {
                      $scope.ShowMsg("修改项目总指标有误;" + res.msg);
                      return;
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      //查询历史参考数据

      function dateToCustomString(date) {
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var day = date.getDate().toString().padStart(2, '0');
          var hours = date.getHours().toString().padStart(2, '0');
          var minutes = date.getMinutes().toString().padStart(2, '0');
          var seconds = date.getSeconds().toString().padStart(2, '0');
          //    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
          return `${year}-${month}-${day}`;

      }
      $scope.QueryHis = () => {
          $scope.qhisclick = true;
          if (!$scope.xsjhjson1.XMNO) {
              $scope.ShowMsg("请先保存数据");
              return
          }
          if (!$scope.QCFlag) {
              $scope.ShowMsg("请先保存数据");
              return;
          }
          if (!$scope.xsjhjson1.SDATE_CK || !$scope.xsjhjson1.EDATE_CK) {
              $scope.ShowMsg("参考日期不能为空");
              return
          }
          if ($scope.xsjhjson1.SDATE_CK) {
              var date1 = new Date($scope.xsjhjson1.SDATE_CK);
              var date2 = new Date(GetDate());
              if (date1 >= date2) {
                  $scope.ShowMsg("参考开始日期不能大于等于当前日期")
                  return;
              }
          }
          if ($scope.xsjhjson1.EDATE_CK) {
              var date1 = new Date($scope.xsjhjson1.EDATE_CK);
              var date2 = new Date(GetDate());
              if (date1 >= date2) {
                  $scope.ShowMsg("参考结束日期不能大于等于当前日期")
                  return;
              }
          }
          if ($scope.xsjhjson1.SDATE_CK && $scope.xsjhjson1.EDATE_CK) {
              var date1 = new Date($scope.xsjhjson1.SDATE_CK);
              var date2 = new Date($scope.xsjhjson1.EDATE_CK);
              if (date1 > date2) {
                  $scope.ShowMsg("参考结束日期不小于参考开始日期")
                  return;
              }
          }
          let sd = dateToCustomString(new Date($scope.xsjhjson1.SDATE_CK));
          let ed = dateToCustomString(new Date($scope.xsjhjson1.EDATE_CK));
          MyAjax.Ajax("/Pro_Sale_Plan/ExecCKXSE", {
              Xmno: $scope.xsjhjson1.XMNO,
              sdate: sd,
              edate: ed,
          }, "POST", "json", function (res) {
              $scope.qhisclick = false;
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.xsjhjson1.XSNET_CK = res.msg;
                      $scope.xsjhjson1.XSNET = res.msg;
                      $scope.ShowMsg("查询成功");
                  } else {
                      $scope.ShowMsg("查询失败;" + res.msg);
                      return;
                  }
              })
          }, function (data) {
              $scope.qhisclick = false;
              MyAjax.myAlert(data);
          }, false);
      }
      /* $scope.SDTJ = true;//输入各指标后不联动计算*/
      //输入百分比时同步修改数据
      $scope.BfbCheck = (cloumn, idx) => {
          if (cloumn == "TGBFB") {
              //提高百分比
              var value = $scope.xsjhjson1.TGBFB;
              if (isNaN(value)) {
                  $scope.xsjhjson1.TGBFB = 0;
                  return;
              }
              if ($scope.xsjhjson1.XSNET_CK) {
                  $scope.xsjhjson1.XSNET = parseFloat($scope.xsjhjson1.XSNET_CK * ($scope.xsjhjson1.TGBFB / 100) + parseFloat($scope.xsjhjson1.XSNET_CK)).toFixed(2);
              }
          } else if (cloumn == "XSNET" || cloumn == "XSNETTWO") {
              //总销售目标
              var value = $scope.xsjhjson1.XSNET;
              if (isNaN(value)) {
                  $scope.xsjhjson1.XSNET = 0;
                  return;
              }
              $scope.JSTGBFB();
              if (cloumn == "XSNETTWO") {
                  $scope.GetCz();
                  /*if (!$scope.SDTJ) {*/
                  $scope.refshData();
                  /*}*/
                  $scope.GetSpSum();
                  $scope.GetMdSum();
              }
          } else if (cloumn == "XMHDNET") {
              var value = $scope.xsjhjson1.XMHDNET;
              if (isNaN(value)) {
                  $scope.xsjhjson1.XMHDNET = 0;
                  return;
              }
              if (value < 0) {
                  $scope.xsjhjson1.XMHDNET = 0;
              }
          }
          else if (cloumn == "KHIDBSRATE") {
              //门店报损率
              var value = $scope.xsjhjson2[idx].BSRATE;
              if (isNaN(value)) {
                  $scope.xsjhjson2[idx].BSRATE = 0;
                  return;
              }
              if (value > 100) {
                  $scope.xsjhjson2[idx].BSRATE = 100;
              }
          } else if (cloumn == "MDZBZB") {
              var value = $scope.xsjhjson2[idx].MDZBZB;
              if (isNaN(value)) {
                  $scope.xsjhjson2[idx].MDZBZB = 0;
              }
              if (value > 100) {
                  $scope.xsjhjson2[idx].MDZBZB = 100;
              }
              $scope.xsjhjson2[idx].XSNET = parseFloat(parseFloat($scope.xsjhjson2[idx].MDZBZB) / 100 * parseFloat($scope.xsjhjson1.XSNET)).toFixed(2);
              $scope.xsjhjson2[idx].RJZBNET = $scope.checkData($scope.xsjhjson2[idx].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[idx].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
              $scope.MDzbzb(idx);
              $scope.GetMdSum();

              //if (!$scope.SDTJ) {
              //    $scope.SumXsnetMDZB(idx);
              //} else {
              // for (var i = 0; i < $scope.xsjhjson2.length; i++) {
              //     $scope.MdxszbSum = parseFloat(parseFloat($scope.MdxszbSum) + parseFloat($scope.xsjhjson2[i].XSNET)).toFixed(2);
              //   }
              /*}*/
          }
          else if (cloumn == "DEFAULTBSRATE" || cloumn == "XMZKSX") {
              //门店报损率
              var value = $scope.xsjhjson1[cloumn];
              if (isNaN(value)) {
                  $scope.xsjhjson1[cloumn] = 0;
                  return;
              }
              if (value > 100) {
                  $scope.xsjhjson1[cloumn] = 100;
              }
              if (cloumn == "DEFAULTBSRATE") {
                  $scope.xsjhjson2.forEach(function (item) { item.BSRATE = angular.copy($scope.xsjhjson1.DEFAULTBSRATE) });
              }
          }
          else if (cloumn == "KHIDXSNET") {
              //门店销售额
              var value = $scope.xsjhjson2[idx].XSNET;
              if (isNaN(value)) {

                  $scope.xsjhjson2[idx].XSNET = 0;
                  $scope.GetMdSum();
                  $scope.MDzbzb();
                  /*if (!$scope.SDTJ) {
                      $scope.SumXsnetMD(idx);
                 /* }*/
                  return;
              }
              $scope.xsjhjson2[idx].XSNET = Number($scope.xsjhjson2[idx].XSNET)
              $scope.GetMdSum();
              $scope.MDzbzb();
              //门店销售额改变后需要修改总销售额
              /*     if (!$scope.SDTJ) {
                       $scope.SumXsnetMD(idx);
                 /*  }*/
          }
          else if (cloumn == "SPIDXSQTY") {
              var value = $scope.xsjhjson4[idx].XSQTY;
              if (isNaN(value)) {

                  $scope.xsjhjson4[idx].XSQTY = 0;
                  $scope.xsjhjson4[idx].XSNET = parseFloat($scope.xsjhjson4[idx].XSQTY * $scope.xsjhjson4[idx].PRICE).toFixed(2);
                  $scope.GetSpSum();
                  $scope.SPzbzb();
                  $scope.GetCz();
                  $scope.JSTGBFB();
                  /* if (!$scope.SDTJ) {
                       $scope.SumXsqtyDP(idx);
                  /* }*/
                  return;
              }
              $scope.xsjhjson4[idx].XSQTY = Number($scope.xsjhjson4[idx].XSQTY);
              $scope.xsjhjson4[idx].XSNET = parseFloat($scope.xsjhjson4[idx].XSQTY * $scope.xsjhjson4[idx].PRICE).toFixed(2);
              //门店销售额改变后需要修改总销售额
              /*if (!$scope.SDTJ) {
                  $scope.SumXsqtyDP(idx);
           /*   }*/
              $scope.GetSpSum();
              $scope.SPzbzb();
              $scope.JSTGBFB();
              $scope.GetCz();
          }
          else if (cloumn == "PLIDXSNET") {
              //品类销售额
              var value = $scope.xsjhjson3[idx].XSNET;
              if (isNaN(value)) {

                  $scope.xsjhjson3[idx].XSNET = 0;
                  $scope.SumXsnetPL();
                  return;
              }
              //品类销售额改变后需要修改总销售额
              $scope.SumXsnetPL();
          }

          //if (value > 100) {
          //    $scope.formData.MDCX002[propName] = 100;
          //    return;
          //}
          //var decimalIndex = value.indexOf(".");
          //if (decimalIndex !== -1) {
          //    $scope.formData.MDCX002[propName] = value.substring(0, decimalIndex);
          //}

      }
      $scope.JSTGBFB = () => {
          if ($scope.xsjhjson1.XSNET_CK == "0" || $scope.xsjhjson1.XSNET_CK == 0 || !$scope.xsjhjson1.XSNET_CK) {
              if (parseFloat($scope.xsjhjson1.XSNET) > 0) {
                  $scope.xsjhjson1.TGBFB = 100;
              } else {
                  $scope.xsjhjson1.TGBFB = "";
              }
          } else {
              if ($scope.xsjhjson1.XSNET_CK) {
                  $scope.xsjhjson1.TGBFB = parseFloat(parseFloat(($scope.xsjhjson1.XSNET - $scope.xsjhjson1.XSNET_CK) / $scope.xsjhjson1.XSNET_CK).toFixed(4) * 100).toFixed(2);
              }
          }
      }
      $scope.SumXsnetPL = () => {
          let sum = 0;
          if ($scope.xsjhjson3.length > 0) {
              for (var i = 0; i < $scope.xsjhjson3.length; i++) {
                  if (parseFloat($scope.xsjhjson3[i].XSNET)) {
                      sum = sum + parseFloat($scope.xsjhjson3[i].XSNET);
                  }
              }
          }
          $scope.xsjhjson1.XSNET = sum.toFixed(2);
          ////修改品类的销售额后总的销售额会变 需重新按比例分配门店销售额
          //if ($scope.xsjhjson1.XSNET_CK && $scope.xsjhjson1.XSNET) {
          //    if ($scope.xsjhjson2.length > 0) {
          //        for (var i = 0; i < $scope.xsjhjson2.length; i++) {
          //            $scope.xsjhjson2[i].XSNET = parseFloat(($scope.xsjhjson2[i].XSNET_CK / $scope.xsjhjson1.XSNET_CK) * $scope.xsjhjson1.XSNET).toFixed(2);
          //        }
          //    }
          //}
      }
      //计算门店销售指标综合
      $scope.GetMdSumZB = (idx) => {
          $scope.MdxszbSum = 0;
          for (var i = 0; i < $scope.xsjhjson2.length; i++) {
              $scope.MdxszbSum = parseFloat(parseFloat($scope.MdxszbSum) + parseFloat($scope.xsjhjson2[i].XSNET)).toFixed(2);
              if (idx == i) {
                  $scope.xsjhjson2[i].MDZBZB = $scope.xsjhjson2[i].MDZBZB;
              } else {
                  $scope.xsjhjson2[i].MDZBZB = parseFloat(parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / parseFloat($scope.xsjhjson1.XSNET)).toFixed(5) * 100).toFixed(2);
              }
          }
      }
      $scope.MDzbzb = (idx) => {
          let zbsum = 0;
          let sumnet = 0;
          for (var i = 0; i < $scope.xsjhjson2.length; i++) {
              if (idx != undefined) {
                  if (i != idx) {
                      $scope.xsjhjson2[i].MDZBZB = parseFloat(parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / parseFloat($scope.xsjhjson1.XSNET)).toFixed(5) * 100).toFixed(2);
                      $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                      sumnet = parseFloat(sumnet) + parseFloat($scope.xsjhjson2[i].XSNET);
                  }
                  zbsum = parseFloat(zbsum) + parseFloat($scope.xsjhjson2[i].MDZBZB)
              } else {
                  $scope.xsjhjson2[i].MDZBZB = parseFloat(parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / parseFloat($scope.xsjhjson1.XSNET)).toFixed(5) * 100).toFixed(2);
                  $scope.xsjhjson2[i].RJZBNET = $scope.checkData($scope.xsjhjson2[i].XSNET) ? parseFloat(parseFloat($scope.xsjhjson2[i].XSNET) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
                  zbsum = parseFloat(zbsum) + parseFloat($scope.xsjhjson2[i].MDZBZB)
                  sumnet = parseFloat(sumnet) + parseFloat($scope.xsjhjson2[i].XSNET);
              }
          }
          $scope.MdzbSum = parseFloat(zbsum).toFixed(2);
          $scope.Mdsyzb = parseFloat(100 - parseFloat(zbsum).toFixed(2)).toFixed(2);
          if (parseFloat($scope.Mdsyzb) == 0) {
              if (idx != undefined) {
                  $scope.xsjhjson2[idx].XSNET = parseFloat($scope.xsjhjson1.XSNET) - parseFloat(sumnet)
              }
          }

      }
      $scope.GetMdSum = () => {
          $scope.MdxszbSum = 0;
          for (var i = 0; i < $scope.xsjhjson2.length; i++) {
              $scope.MdxszbSum = parseFloat(parseFloat($scope.MdxszbSum) + parseFloat($scope.xsjhjson2[i].XSNET)).toFixed(2);
          }
          $scope.$applyAsync();
      }
      $scope.SPzbzb = () => {
          for (var i = 0; i < $scope.xsjhjson4.length; i++) {
              $scope.xsjhjson4[i].RJZBQTY = $scope.checkData($scope.xsjhjson4[i].XSQTY) ? parseFloat(parseFloat($scope.xsjhjson4[i].XSQTY) / (daysBetweenDates($scope.xsjhjson1.SDATE, $scope.xsjhjson1.EDATE) + 1)).toFixed(2) : 0;
          }
      }
      $scope.GetSpSum = () => {
          $scope.SpxszbSum = 0;
          for (var i = 0; i < $scope.xsjhjson4.length; i++) {
              $scope.SpxszbSum = parseFloat(parseFloat($scope.SpxszbSum) + parseFloat($scope.xsjhjson4[i].XSNET)).toFixed(2);
          }
          $scope.xsjhjson1.XSNET = $scope.SpxszbSum;
          $scope.$applyAsync();
      }
      $scope.SumXsnetMD = (idx) => {
          //门店指标金额修改，不变更总销售指标，重算其他门店的值。
          let sum = 0;
          if ($scope.xsjhjson2.length > 0) {
              let newsum = 0;
              if ($scope.xsjhjson2[idx].XSNET == "" || $scope.xsjhjson2[idx].XSNET == undefined) {
                  return
              }
              let synet = parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.xsjhjson2[idx].XSNET);
              for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                  if (i == idx) {
                      continue;
                  }
                  if (idx == $scope.xsjhjson2.length - 1) {
                      //当前修改的是最后一个
                      if (i == $scope.xsjhjson2.length - 2) {
                          //那么倒数第二个就用剩余的
                          $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                      } else {
                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET) == 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          } else {
                              $scope.xsjhjson2[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson2[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET))));
                          }
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson2[i].XSNET);
                      }
                  } else {
                      //当前修改的不是最后一个
                      if (i == $scope.xsjhjson2.length - 1) {
                          $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                      } else {

                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET) == 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          } else {
                              $scope.xsjhjson2[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson2[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET))));
                          }
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson2[i].XSNET);
                      }

                  }
              }
          }
          $scope.oldxsjhjson2 = angular.copy($scope.xsjhjson2);
          $scope.GetMdSum();
      }
      $scope.SumXsnetMDZB = (idx) => {
          //门店指标金额修改，不变更总销售指标，重算其他门店的值。
          let sum = 0;
          if ($scope.xsjhjson2.length > 0) {
              let newsum = 0;
              if ($scope.xsjhjson2[idx].XSNET == "" || $scope.xsjhjson2[idx].XSNET == undefined) {
                  return
              }
              let synet = parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.xsjhjson2[idx].XSNET);
              for (var i = 0; i < $scope.xsjhjson2.length; i++) {
                  if (i == idx) {
                      continue;
                  }
                  if (idx == $scope.xsjhjson2.length - 1) {
                      //当前修改的是最后一个
                      if (i == $scope.xsjhjson2.length - 2) {
                          //那么倒数第二个就用剩余的
                          $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                      } else {
                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET) == 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          } else {
                              $scope.xsjhjson2[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson2[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET))));
                          }
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson2[i].XSNET);
                      }
                  } else {
                      //当前修改的不是最后一个
                      if (i == $scope.xsjhjson2.length - 1) {
                          $scope.xsjhjson2[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                      } else {
                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET) == 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          } else {
                              $scope.xsjhjson2[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson2[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson2[idx].XSNET))));
                          }
                          if ($scope.xsjhjson2[i].XSNET < 0) {
                              $scope.xsjhjson2[i].XSNET = 0
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson2[i].XSNET);
                      }

                  }

              }
          }
          $scope.oldxsjhjson2 = angular.copy($scope.xsjhjson2);
          $scope.GetMdSumZB(idx);
      }
      //计算单品销售数量
      $scope.SumXsqtyDP = (idx) => {

          //门店指标金额修改，不变更总销售指标，重算其他门店的值。
          let sum = 0;
          if ($scope.xsjhjson4.length > 0) {
              let newqty = 0;
              let newsum = 0;
              if ($scope.xsjhjson4[idx].XSQTY == "" || $scope.xsjhjson4[idx].XSQTY == undefined) {
                  return
              }
              let synet = parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.xsjhjson4[idx].XSNET);
              for (var i = 0; i < $scope.xsjhjson4.length; i++) {
                  if (i == idx) {
                      continue;
                  }
                  if (idx == $scope.xsjhjson4.length - 1) {
                      //当前修改的是最后一个
                      if (i == $scope.xsjhjson4.length - 2) {
                          //那么倒数第二个就用剩余的
                          $scope.xsjhjson4[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : parseFloat(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE)).toFixed(2);
                          if ($scope.xsjhjson4[i].XSQTY < 0) {
                              $scope.xsjhjson4[i].XSQTY = 0
                          }
                          if ($scope.xsjhjson4[i].XSNET < 0) {
                              $scope.xsjhjson4[i].XSNET = 0
                          }
                      } else {
                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET) == 0) {
                              $scope.xsjhjson4[i].XSQTY = 0
                              $scope.xsjhjson4[i].XSQTY = 0

                          } else {
                              $scope.xsjhjson4[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson4[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET))));
                              $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : Math.floor(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE));
                          }
                          if ($scope.xsjhjson4[i].XSNET < 0) {
                              $scope.xsjhjson4[i].XSNET = 0
                              $scope.xsjhjson4[i].XSQTY = 0;
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson4[i].XSNET);
                          newqty = parseFloat(newqty) + parseFloat($scope.xsjhjson4[i].XSQTY);
                      }
                  } else {
                      //当前修改的不是最后一个
                      if (i == $scope.xsjhjson4.length - 1) {
                          $scope.xsjhjson4[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
                          $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : parseFloat(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE)).toFixed(2);
                          if ($scope.xsjhjson4[i].XSQTY < 0) {
                              $scope.xsjhjson4[i].XSQTY = 0
                          }
                          if ($scope.xsjhjson4[i].XSNET < 0) {
                              $scope.xsjhjson4[i].XSNET = 0
                          }
                      } else {
                          if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET) == 0) {
                              $scope.xsjhjson4[i].XSQTY = 0
                              $scope.xsjhjson4[i].XSQTY = 0

                          } else {
                              $scope.xsjhjson4[i].XSNET = Math.floor(parseFloat(synet * $scope.xsjhjson4[i].XSNET / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET))));
                              $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : Math.floor(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE));
                          }
                          if ($scope.xsjhjson4[i].XSNET < 0) {
                              $scope.xsjhjson4[i].XSNET = 0
                              $scope.xsjhjson4[i].XSQTY = 0;
                          }
                          newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson4[i].XSNET);
                          newqty = parseFloat(newqty) + parseFloat($scope.xsjhjson4[i].XSQTY);
                      }

                  }

              }
              //let syqty=0
              //if (parseFloat($scope.xsjhjson4[idx].PRICE) == 0) {
              //    syqty = 0;
              //} else {
              //    syqty = parseFloat($scope.DPXSQTY) - Math.floor(parseFloat($scope.xsjhjson4[idx].XSNET) / parseFloat($scope.xsjhjson4[idx].PRICE));
              //}

              //for (var i = 0; i < $scope.xsjhjson4.length; i++) {
              //    if (i != idx && i != $scope.xsjhjson4.length - 1) {
              //        if (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET) == 0) {
              //            $scope.xsjhjson4[i].XSNET = 0;
              //        } else {
              //            $scope.xsjhjson4[i].XSNET = Math.floor( parseFloat(parseFloat(synet) * parseFloat($scope.xsjhjson4[i].XSNET) / (parseFloat($scope.xsjhjson1.XSNET) - parseFloat($scope.oldxsjhjson4[idx].XSNET))));
              //        }
              //        if (parseFloat($scope.xsjhjson4[i].PRICE) == 0) {
              //            $scope.xsjhjson4[i].XSQTY = 0
              //        } else {
              //            $scope.xsjhjson4[i].XSQTY = Math.floor(parseFloat(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE)))
              //        }
              //        if ($scope.xsjhjson4[i].XSQTY < 0) {
              //            $scope.xsjhjson4[i].XSQTY = 0
              //        }
              //        if ($scope.xsjhjson4[i].XSNET < 0) {
              //            $scope.xsjhjson4[i].XSNET = 0
              //        }
              //        newqty = parseFloat(newqty) + parseFloat($scope.xsjhjson4[i].XSQTY);
              //        newsum = parseFloat(newsum) + parseFloat($scope.xsjhjson4[i].XSNET);

              //    }
              //    if (i != idx && i == $scope.xsjhjson4.length - 1) {
              //        $scope.xsjhjson4[i].XSNET = parseFloat(parseFloat(synet) - parseFloat(newsum)).toFixed(2);
              //        $scope.xsjhjson4[i].XSQTY = parseFloat($scope.xsjhjson4[i].PRICE) == 0 ? 0 : parseFloat(parseFloat($scope.xsjhjson4[i].XSNET) / parseFloat($scope.xsjhjson4[i].PRICE)).toFixed(2);
              //        if ($scope.xsjhjson4[i].XSQTY < 0) {
              //            $scope.xsjhjson4[i].XSQTY = 0
              //        }
              //        if ($scope.xsjhjson4[i].XSNET < 0) {
              //            $scope.xsjhjson4[i].XSNET = 0
              //        }
              //    }
              //}
          }
          $scope.oldxsjhjson4 = angular.copy($scope.xsjhjson4);
          $scope.GetSpSum();
      }
      ////////////////////////////商品处理 ////////////////////////////////////////////////
      //商品完成
      $scope.SP = {};
      $scope.SPAllSelected = false;
      //商品添加确认
      $scope.spaddShowBtn = () => {
          //$scope.xsjhjson4 = [];
          $scope.spListCopy = angular.copy($scope.spList)
          for (var i = 0; i < $scope.spListCopy.length; i++) {
              if ($scope.spListCopy[i].selected) {
                  if (!$scope.ChcekValue($scope.xsjhjson4, "SPID", $scope.spListCopy[i].SPID)) {
                      $scope.xsjhjson4.push($scope.spListCopy[i]);
                  }
              } else {
                  if ($scope.ChcekValue($scope.xsjhjson4, "SPID", $scope.spListCopy[i].SPID)) {
                      let delindex = $scope.xsjhjson4.findIndex(item => item.SPID === $scope.spListCopy[i].SPID);
                      $scope.xsjhjson4.splice(delindex, 1);
                  }
              }
          }
          $scope.SPAllSelected = false;
          $scope.ShowHtml("XsjhRight");
      }
      //删除已添加的商品
      $scope.DelSp = (ind) => {
          $scope.xsjhjson4.splice(ind, 1);
      }
      //商品筛选条件
      $scope.Spsx = () => {
          $scope.spTj = true;
      }
      $scope.CXSJ = {};
      $scope.Spwc = () => {
          $scope.spTj = false;
          if (!$scope.SP.SPID && !$scope.SP.SNAME && !$scope.SP.PLSNAME && !$scope.SP.PRODUCT_TYPE && !$scope.CXSJ.DATE_LR1 && !$scope.CXSJ.DATE_LR2 && !$scope.SP.YN_JL) {
              $scope.ShowMsg("至少选择一个查询条件")
              return;
          }
          if ($scope.CXSJ.DATE_LR1) {
              $scope.SP.DATE_LR1 = $filter('date')($scope.CXSJ.DATE_LR1, 'yyyy-MM-dd');
          }
          if ($scope.CXSJ.DATE_LR2) {
              $scope.SP.DATE_LR2 = $filter('date')($scope.CXSJ.DATE_LR2, 'yyyy-MM-dd');
          }
          if ($scope.SP.YN_JL) {
              $scope.SP.YNJLSTR = "Y";
              let XMSDATE = $filter('date')($scope.xsjhjson1.SDATE, 'yyyy-MM-dd');
              if (XMSDATE) {
                  $scope.SP.XMSDATE = XMSDATE;
              } else {
                  $scope.ShowMsg("选择节令查询前请先选择项目开始日期")
                  return;
              }
          } else {
              $scope.SP.YNJLSTR = "N";
          }
          $scope.SP.XMXSJHFLAG = "Y";
          MyAjax.Ajax("/Salespro/GetSP", {
              spjson: JSON.stringify($scope.SP)
          }, "POST", "json", function (res) {
              $timeout(function () {
                  $scope.spList = res;
                  $scope.SPCheck();
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);

      }
      //默认选中上一次选择的
      $scope.SPCheck = () => {
          for (var i = 0; i < $scope.spList.length; i++) {
              var len = $scope.xsjhjson4.filter(function (row) {
                  return row.SPID === $scope.spList[i].SPID;
              }).length
              if (len > 0) {
                  $scope.spList[i]["selected"] = true;
              }
          }
      }
      $scope.SpReset = () => {
          $scope.SP = {};
          for (var prop in $scope.CXSJ) {
              if ($scope.CXSJ.hasOwnProperty(prop)) {
                  delete $scope.CXSJ[prop];
              }
          }
      }
      $scope.selectAllSP = () => {
          for (var i = 0; i < $scope.spList.length; i++) {
              $scope.spList[i]["selected"] = $scope.SPAllSelected;
          }
      }
      new SearchA("SP_SPID", "SP_SPID", undefined, undefined, $scope);
      new SearchA("SP_SNAME", "SP_SPID", undefined, undefined, $scope);
      new SearchA("SP_PLSNAME", "PL_PLID", undefined, undefined, $scope);

      ////////////////////////////商品处理 ////////////////////////////////////////////////

      ////////////////////////////品类处理 ////////////////////////////////////////////////
      //品类完成
      $scope.PL = {};
      $scope.PLAllSelected = false;
      //品类添加确认
      $scope.pladdShowBtn = () => {
          //$scope.xsjhjson3 = [];
          $scope.plListCopy = angular.copy($scope.plList)
          for (var i = 0; i < $scope.plListCopy.length; i++) {
              if ($scope.plListCopy[i].selected) {
                  if (!$scope.ChcekValue($scope.xsjhjson3, "PLID", $scope.plListCopy[i].PLID)) {
                      $scope.xsjhjson3.push($scope.plListCopy[i]);
                  }
              } else {
                  if ($scope.ChcekValue($scope.xsjhjson3, "PLID", $scope.plListCopy[i].PLID)) {
                      let delindex = $scope.xsjhjson3.findIndex(item => item.PLID === $scope.plListCopy[i].PLID);
                      $scope.xsjhjson3.splice(delindex, 1);
                  }
              }
          }
          $scope.PLAllSelected = false;
          $scope.ShowHtml("XsjhRight");
      }
      //删除已添加的品类
      $scope.DelPl = (ind) => {
          $scope.xsjhjson3.splice(ind, 1);
      }
      //品类筛选条件
      $scope.Plsx = () => {
          $scope.plTj = true;
      }
      $scope.Plwc = () => {
          $scope.plTj = false;
          MyAjax.Ajax("/Salespro/GetPL", {
              pljson: JSON.stringify($scope.PL)
          }, "POST", "json", function (res) {
              $timeout(function () {
                  $scope.plList = res.filter(item => item.PLID.length == 3);
                  $scope.PLCheck();
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      //默认选中上一次选择的
      $scope.PLCheck = () => {
          for (var i = 0; i < $scope.plList.length; i++) {
              var len = $scope.xsjhjson3.filter(function (row) {
                  return row.PLID === $scope.plList[i].PLID;
              }).length
              if (len > 0) {
                  $scope.plList[i]["selected"] = true;
              }
          }
      }
      $scope.PlReset = () => {
          $scope.PL = {};
      }
      $scope.selectAllPL = () => {
          for (var i = 0; i < $scope.plList.length; i++) {
              $scope.plList[i]["selected"] = $scope.PLAllSelected;
          }
      }
      $scope.updateSelectionPL = function (item) {
          if (item.PLJBID === '1') {
              for (var i = 0; i < $scope.plList.length; i++) {
                  // 当item.PLJBID为'1'且PLID_F.substring(0, 1)等于item.PLID时，将selected设置为true
                  if ($scope.plList[i].PLID_F.substring(0, 1) === item.PLID) {
                      $scope.plList[i].selected = item.selected;
                  }
              }
          }
          if (item.PLJBID === '2' || item.PLJBID === '3') {
              for (var i = 0; i < $scope.plList.length; i++) {
                  if ($scope.plList[i].PLID_F === item.PLID) {
                      $scope.plList[i].selected = item.selected;
                  }
              }
          }
      };
      new SearchA("PL_PLID", "PL_PLIDXM", undefined, undefined, $scope);
      new SearchA("PL_SNAME", "PL_PLIDXM", undefined, undefined, $scope);

      ////////////////////////////品类处理 ////////////////////////////////////////////////


      $scope.ChcekValue = (items, column, text) => {
          //判断现有的门店包不包含 选择门店如果包含就不写入
          var containsValue = items.some(function (item) {
              return item[column].includes(text);
          });
          return containsValue;
      }
      ////////////////////////////门店处理 ////////////////////////////////////////////////
      //门店完成
      $scope.MD = {};
      $scope.MDAllSelected = false;
      //门店添加确认
      $scope.mdaddShowBtn = () => {
          //$scope.xsjhjson2 = [];
          $scope.mdListCopy = angular.copy($scope.mdList)
          for (var i = 0; i < $scope.mdListCopy.length; i++) {
              if ($scope.mdListCopy[i].selected) {
                  if (!$scope.ChcekValue($scope.xsjhjson2, "KHID", $scope.mdListCopy[i].KHID)) {
                      $scope.xsjhjson2.push($scope.mdListCopy[i]);
                  }
              } else {
                  if ($scope.ChcekValue($scope.xsjhjson2, "KHID", $scope.mdListCopy[i].KHID)) {
                      let delindex = $scope.xsjhjson2.findIndex(item => item.KHID === $scope.mdListCopy[i].KHID);
                      $scope.xsjhjson2.splice(delindex, 1);
                  }
              }
          }
          $scope.MDAllSelected = false;
          $scope.ShowHtml("XsjhRight");
      }
      //删除已添加的门店
      $scope.DelMd = (ind) => {
          $scope.xsjhjson2.splice(ind, 1);
      }
      //门店筛选条件
      $scope.Mdsx = () => {
          $scope.mdTj = true;
      }
      $scope.Mdwc = () => {
          $scope.mdTj = false;
          MyAjax.Ajax("/Salespro/GetMD", {
              mdjson: JSON.stringify($scope.MD)
          }, "POST", "json", function (resdata) {
              GetLogin(resdata);
              $timeout(function () {
                  $scope.mdList = resdata;
                  $scope.mdList = resdata.filter(item => item.ZZTLX == "QT");
                  $scope.mdList.sort(function (a, b) {
                      // 提取每个字符串中的数字部分
                      var numA = parseInt(a.KHID.substring(6));
                      var numB = parseInt(b.KHID.substring(6));
                      // 比较并返回结果
                      return numA - numB;
                  });

                  $scope.MDCheck();
              });

          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      //默认选中上一次选择的
      $scope.MDCheck = () => {
          for (var i = 0; i < $scope.mdList.length; i++) {
              var len = $scope.xsjhjson2.filter(function (row) {
                  return row.KHID === $scope.mdList[i].KHID;
              }).length
              if (len > 0) {
                  $scope.mdList[i]["selected"] = true;
              }
          }
      }
      $scope.MdReset = () => {
          $scope.MD = {};
      }
      $scope.selectAllMD = () => {
          for (var i = 0; i < $scope.mdList.length; i++) {
              $scope.mdList[i]["selected"] = $scope.MDAllSelected;
          }
      }
      var P3 = new SearchA("MD_KHID", "MD_KHID", undefined, undefined, $scope);
      ////////////////////////////门店处理 ////////////////////////////////////////////////

      //初始化
      $scope.XsjhRight = true;//历史参考销售额整个右边的显示控制
      $scope.mdlistShow = false;//门店已添加的列表
      $scope.mdaddShow = false;//门店去添加的列表
      $scope.pllistShow = false;//品类已添加的列表
      $scope.pladdShow = false;//品类去添加的列表
      $scope.splistShow = false;//商品已添加的列表
      $scope.spaddShow = false;//商品去添加的列表
      //清空数据
      $scope.ClearData = (type) => {
          if (type == "MD") {
              $scope.xsjhjson2 = [];
          }
          else if (type == "PL") {
              $scope.xsjhjson3 = [];
          }
          else if (type == "SP") {
              $scope.xsjhjson4 = [];
          }
      }
      //显示主页隐藏的div
      $scope.ShowHtml = (type) => {
          if (type == "MDEdit") {
              //门店编辑/查看
              $scope.mdlistShow = true;//门店已添加的列表
              $scope.mdaddShow = false;//门店去添加的列表
              $scope.pllistShow = false;//品类已添加的列表
              $scope.pladdShow = false;//品类去添加的列表
              $scope.splistShow = false;//商品已添加的列表
              $scope.spaddShow = false;//商品去添加的列表
              $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
          } else if (type == "MDAdd") {
              //门店去添加
              $scope.mdlistShow = false;//门店已添加的列表
              $scope.mdaddShow = true;//门店去添加的列表
              $scope.pllistShow = false;//品类已添加的列表
              $scope.pladdShow = false;//品类去添加的列表
              $scope.splistShow = false;//商品已添加的列表
              $scope.spaddShow = false;//商品去添加的列表
              $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
              $scope.mdList = [];
          } else if (type == "PLSPEdit") {
              if ($scope.xsjhjson1.YN_DP == "Y") {
                  //商品编辑/查看
                  $scope.mdlistShow = false;//门店已添加的列表
                  $scope.mdaddShow = false;//门店去添加的列表
                  $scope.pllistShow = false;//品类已添加的列表
                  $scope.pladdShow = false;//品类去添加的列表
                  $scope.splistShow = true;//商品已添加的列表
                  $scope.spaddShow = false;//商品去添加的列表
                  $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
              } else {
                  //品类编辑/查看
                  $scope.mdlistShow = false;//门店已添加的列表
                  $scope.mdaddShow = false;//门店去添加的列表
                  $scope.pllistShow = true;//品类已添加的列表
                  $scope.pladdShow = false;//品类去添加的列表
                  $scope.splistShow = false;//商品已添加的列表
                  $scope.spaddShow = false;//商品去添加的列表
                  $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
              }
          } else if (type == "PLSPAdd") {
              if ($scope.xsjhjson1.YN_DP == "Y") {
                  //商品去添加
                  $scope.mdlistShow = false;//门店已添加的列表
                  $scope.mdaddShow = false;//门店去添加的列表
                  $scope.pllistShow = false;//品类已添加的列表
                  $scope.pladdShow = false;//品类去添加的列表
                  $scope.splistShow = false;//商品已添加的列表
                  $scope.spaddShow = true;//商品去添加的列表
                  $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
                  $scope.spList = [];

              } else {
                  //品类去添加
                  $scope.mdlistShow = false;//门店已添加的列表
                  $scope.mdaddShow = false;//门店去添加的列表
                  $scope.pllistShow = false;//品类已添加的列表
                  $scope.pladdShow = true;//品类去添加的列表
                  $scope.splistShow = false;//商品已添加的列表
                  $scope.spaddShow = false;//商品去添加的列表
                  $scope.XsjhRight = false;//历史参考销售额整个右边的显示控制
                  $scope.plList = [];

              }
          } else if (type == "XsjhRight") {
              //门店编辑/查看
              $scope.mdlistShow = false;//门店已添加的列表
              $scope.mdaddShow = false;//门店去添加的列表
              $scope.pllistShow = false;//品类已添加的列表
              $scope.pladdShow = false;//品类去添加的列表
              $scope.splistShow = false;//商品已添加的列表
              $scope.spaddShow = false;//商品去添加的列表
              $scope.XsjhRight = true;//历史参考销售额整个右边的显示控制
          }

      }

      GetDate = () => {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth() + 1; // 月份是从0开始的
          const day = currentDate.getDate();
          return `${year}-${month}-${day}`;

      }

      //保存主数据
      $scope.SaveZbData = () => {
          if (!$scope.xsjhjson1.XMTYPE) {
              $scope.ShowMsg("请输入项目类型");
              return;
          }
          if (!$scope.xsjhjson1.XMNAME) {
              $scope.ShowMsg("请输入项目名称")
              return;
          }
          if (!$scope.xsjhjson1.SDATE) {
              $scope.ShowMsg("请输入开始日期")
              return;
          }
          if (!$scope.xsjhjson1.EDATE) {
              $scope.ShowMsg("请输入截止日期")
              return;
          }
          if ($scope.xsjhjson1.SDATE) {
              var date1 = new Date($scope.xsjhjson1.SDATE);
              var date2 = new Date(GetDate());
              if (date1 < date2) {
                  $scope.ShowMsg("开始日期不小于当前日期")
                  return;
              }
          }
          if ($scope.xsjhjson1.EDATE) {
              var date1 = new Date($scope.xsjhjson1.EDATE);
              var date2 = new Date(GetDate());
              if (date1 < date2) {
                  $scope.ShowMsg("截止日期不小于当前日期")
                  return;
              }
          }
          if ($scope.xsjhjson1.SDATE && $scope.xsjhjson1.EDATE) {
              var date1 = new Date($scope.xsjhjson1.SDATE);
              var date2 = new Date($scope.xsjhjson1.EDATE);
              if (date1 > date2) {
                  $scope.ShowMsg("截止日期不小于开始日期")
                  return;
              }
          }
          if ($scope.xsjhjson1.XMTYPE == "XM_3") {
              //节令
              if (!$scope.xsjhjson1.FESTIVAL_ID) {
                  $scope.ShowMsg("请选择节令类型")
                  return;
              } else {
                  var date1 = new Date(dateToCustomString($scope.xsjhjson1.SDATE) + " 00:00:00");
                  var date2 = new Date(dateToCustomString($scope.xsjhjson1.EDATE) + " 00:00:00");
                  var datejl1 = new Date($scope.JlSDATE);//节令起日期
                  var datejl2 = new Date($scope.JlEDATE);//节令止日期
                  if (!(date1 <= datejl1 && date2 >= datejl2)) {
                      $scope.ShowMsg("当前日期不包含节令日期,节令日期为:" + dateToCustomString(datejl1) + "-" + dateToCustomString(datejl2))
                      return;
                  }

              }

          }
          if ($scope.xsjhjson2.length == 0) {
              $scope.ShowMsg("请选择门店")
              return;
          }
          if ($scope.xsjhjson1.YN_DP) {
              if ($scope.xsjhjson1.YN_DP == "Y") {
                  $scope.xsjhjson3 = [];
                  if ($scope.xsjhjson4.length == 0) {
                      $scope.ShowMsg("请选择商品")
                      return;
                  }
              } else if ($scope.xsjhjson1.YN_DP == "N") {
                  $scope.xsjhjson4 = [];
                  if ($scope.xsjhjson3.length == 0) {
                      $scope.ShowMsg("请选择品类")
                      return;
                  }
              }
          } else {
              $scope.ShowMsg("请选择品类/商品范围")
              return;
          }
          MyAjax.Ajax("/Pro_Sale_Plan/InsertXsWh", {
              OldXmNo: $scope.xsjhjson1.XMNO,
              xsjhjson1: JSON.stringify($scope.xsjhjson1),
              xsjhjson2: JSON.stringify($scope.xsjhjson2),
              xsjhjson3: JSON.stringify($scope.xsjhjson3),
              xsjhjson4: JSON.stringify($scope.xsjhjson4)
          }, "POST", "json", function (res) {
              $timeout(function () {
                  if (res.code == "0") {
                      $scope.QCFlag = true;
                      $scope.xsjhjson1.XMNO = res.data;
                      $scope.xsjhjson1.XSNET = null;
                      $scope.xsjhjson1.XSNET_CK = null;
                      $scope.ShowMsg("保存成功;单号为:" + $scope.xsjhjson1.XMNO);
                  } else {
                      $scope.ShowMsg("保存失败;" + res.msg);
                  }
              })
          }, function (data) {
              MyAjax.myAlert(data);
          }, false);
      }
      GetDAPZCSUSER = () => {
          $scope.DAPZCS = [];
          $scope.showDiv = false; // 初始时不显示div
          $.ajax
              ({
                  type: "post",
                  url: "/Pro_Sale_Plan/GetDAPZCS_User",
                  dataType: 'json',
                  async: false,
                  data: {},
                  success: function (resdata) {
                      GetLogin(resdata);

                      if (resdata.length > 0) {
                          $scope.XMTYPE = resdata.filter(item => item.ID === "XMTYPE");
                          $scope.DAPZCS = resdata;
                      }
                  }
              })
      }
      GetDAPZCSUSER()
      // 添加全局点击事件来判断点击是否在hdsx div外面

      document.addEventListener('click', function (event) {
          if (!event.target.closest('.btn-sx') && !event.target.closest('.hdsx') && !event.target.closest('.select2-search') && !event.target.closest('.mdtc')) {
              $scope.$apply(function () {
                  $scope.back();
                  $scope.mdTj = false;
                  $scope.plTj = false;
                  $scope.spTj = false;
              });
          }
      });
      $scope.back = () => {
          $scope.MD = {};
          $scope.PL = {};
          $scope.SP = {};
      }

      $scope.confirmTZ = () => {
          stopPropagation()
          $('.yqzf').hide();
          hideOverlay();
      }
      //显示遮罩层
      function showOverlay() {
          $('.overlay').show();
          $('body').css('overflow', 'hidden');
      }
      //关闭弹窗时 关闭遮罩层
      function hideOverlay() {
          $('.overlay').hide();
          $('body').css('overflow', 'auto');
      }
      //////////////////删除等控件的显示隐藏////////////////////
      $('.content').on('click', 'table td .hui', function () {
          $(this).siblings("ol").show();
          $(this).hide();
          $(this).siblings(".lan").show();
          $(this).parents('tr').css('background', '#F0F2FA')
          $(this).parents('tr').siblings('tr').css('background', '#fff');
          $(this).parents('tr').siblings('tr').find('td ol').hide();
          $(this).parents('tr').siblings('tr').find('td .lan').hide();
          $(this).parents('tr').siblings('tr').find('td .hui').show();
      });
      $('.content').on('click', 'table td .lan', function () {
          $(this).siblings("ol").hide();
          $(this).hide();
          $(this).siblings(".hui").show();
          $(this).parents('tr').css('background', '#fff')
          $(this).parents('tr').siblings('tr').find('td ol').hide();
      });
      $(document).bind('click', function (e) {
          if ($(e.target).closest('td img ,.ol ,.content span button.btn-sx ,.hdsx').length > 0) {
          } else {
              $('.ol').hide();
              $(".hui").show();
              $(".lan").hide();
          }
      });
      //////////////////删除等控件的显示隐藏////////////////////

      ////////////////////////////档案参数处理 ////////////////////////////////////////////////
      GetDAPZCS = () => {
          $scope.DAPZCS = [];
          $scope.showDiv = false; // 初始时不显示div
          $.ajax
              ({
                  type: "post",
                  url: "/Salespro/GetDAPZCS",
                  dataType: 'json',
                  async: false,
                  data: {},
                  success: function (resdata) {
                      $scope.DQID = resdata.find(item => item.ID === "DQID").children;
                      $scope.BILL_STATUS = resdata.find(item => item.ID === "BILL_STATUS").children;
                      $scope.ZZTLX = resdata.find(item => item.ID === "ZZTLX").children;
                      $scope.KHZID = resdata.find(item => item.ID === "KHZID").children;
                      $scope.CLIENT_TYPE = resdata.find(item => item.ID === "CLIENT_TYPE").children;
                      $scope.CLIENT_STATUS = resdata.find(item => item.ID === "CLIENT_STATUS").children;
                      $scope.QTLV = resdata.find(item => item.ID === "QTLV").children;
                      $scope.YYBID = resdata.find(item => item.ID === "YYBID").children;
                      $scope.KQID = resdata.find(item => item.ID === "KQID").children;
                      $scope.PRODUCT_TYPE = resdata.find(item => item.ID === "PRODUCT_TYPE").children;
                      $scope.DAPZCS = resdata;
                      $scope.processedData = $scope.preprocessData($scope.DAPZCS);
                  }
              })
      }
      //2023-12-28 预处理数据 将配置参数组装储存
      $scope.preprocessData = function (data) {
          var dict = {};
          for (var i = 0; i < data.length; i++) {
              var id = data[i].ID;
              dict[id] = {};
              for (var j = 0; j < data[i].children.length; j++) {
                  var id_nr = data[i].children[j].ID_NR;
                  dict[id][id_nr] = data[i].children[j].SNAME;
              }
          }
          return dict;
      };
      // 获取配置参数 SNAME
      $scope.getSNAME = function (id, id_nr) {
          if ($scope.processedData[id] && $scope.processedData[id][id_nr]) {
              return $scope.processedData[id][id_nr];
          }
          return null;
      };
      GetDAPZCS()
      $scope.GS = [];
      $scope.GetGS = () => {
          $scope.GS = [];
          $.ajax
              ({
                  type: "post",
                  url: "/Salespro/GetGS",
                  dataType: 'json',
                  async: false,
                  data: {
                      gsjson: ""
                  },
                  success: function (resdata) {
                      $scope.GS = resdata;
                  }
              })
      }
      $scope.GetGSNAME = (GSID) => {
          const SNAME = $scope.GS.find(item => item.GSID === GSID)?.SNAME;
          return SNAME ?? null;
      }

      $scope.GetGS();
      ////////////////////////////档案参数处理 ////////////////////////////////////////////////

  })



</script>
}