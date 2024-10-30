<template>
    <div id="app">
      <div
        id="webgl"
        :class="presentProcedure == 5 ? 'leftCenter' : ''"
        :style="{ height: `${cameraInit.height}px` }"
      >
        <div id="webgldis"></div>
        <div
          style="position: relative"
          class="canvasBox"
          :style="presentProcedure == 1 ? 'display:none' : ''"
        >
          <canvas
            id="myCanvas"
            ref="myCanvas"
            class="dix"
            :class="ynPreview ? 'bgimggif' : ''"
          >
          </canvas>
          <div
            id="cssBoundingBox"
            style="position: absolute; border: 2px solid red"
          ></div>
          <div
            class="popUpGifl"
            @click="hidePopUp"
            :style="{ right: popupPosition + '%' }"
            id="popUpGifl"
            v-if="showPopGifl"
          >
            <img src="../assets/lih.png" alt="" />
          </div>
        </div>
      </div>
      <div class="changeModels" @click="changeModels">填充模式</div>
      <div class="showFill" v-show="isShowModelValueChange">
        <div class="fillItem" @click="addmyarc">
          <img src="../assets/ht-shanx.png" alt="" />
        </div>
        <div class="fillItem" @click="addmycircular">
          <img src="../assets/ht-banyh.png" alt="" />
        </div>
        <div class="fillItem" @click="addmyrect">
          <img src="../assets/ht-jux.png" alt="" />
        </div>
        <div class="fillItem" @click="addmyarcLove">
          <img src="../assets/ht-xinx.png" alt="" />
        </div>
        <div class="fillItem" @click="addmywind">
          <img src="../assets/ht-dfc.png" alt="" />
        </div>
      </div>
      <div class="showModelValueChange" v-show="isShowModelValueChange">
        <p>
          <input v-model="shareParm1" placeholder="测试做图参数1" />
          <input
            v-model="shareParm2"
            placeholder="测试做图参数2 目前圆环在使用"
          />
        </p>
        <p>
          <button v-on:click="addmyarc">添加圆弧</button>
          <button v-on:click="addmyarcLove">添加爱心</button>
          <button v-on:click="addmycircular">添加圆环</button>
          <button v-on:click="addmyrect">矩形</button>
          <button v-on:click="addmytriangle">三角形</button>
          <button v-on:click="addmywind">风车</button>
          <button v-on:click="addmyleaf">叶子</button>
        </p>
        <p>
          <button v-on:click="shareCopy">复制</button>
          <input v-model="shareCopyParm" placeholder="复制参数" />
          <button v-on:click="shareFill">填充</button>
          <input v-model="shareFillParm" placeholder="填充参数" />
          <button v-on:click="deleteShareFill">删除填充</button>
          <button v-on:click="deleteShare">删除</button>
        </p>
        <p>
          <button v-on:click="shareXScaleAdd">X放大</button>
          <button v-on:click="shareXScaleSub">X缩小</button>
          <button v-on:click="shareZScaleAdd">Z放大</button>
          <button v-on:click="shareZScaleSub">z缩小</button>
          <button v-on:click="shareYrotateAdd">左旋</button>
          <button v-on:click="shareYrotateSub">右旋</button>
        </p>
      </div>
  
      <!-- <div style="position: absolute; top: 30%; left: 20%" @click="startMoving">
        开始移动
      </div> -->
      <div
        class="shadowBox"
        v-if="showPopupDiv"
        style="
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        "
      >
        <div class="outerUpBox">
          <p class="p1">惊喜礼券</p>
          <p class="p2">恭喜获得礼券一张</p>
          <div class="middioup">
            <p class="left">
              <span>全品类代金券</span>
              <span>2024-08-01至2034-10-30</span>
            </p>
            <p class="right">
              <span>￥5</span>
              <span>满￥20可用</span>
            </p>
          </div>
        </div>
        <p class="closePop" @click="closePop">
          <img src="../assets/tc-guanbi.png" />
        </p>
      </div>
      <div class="quitwess" @click="quit" v-show="onlySee">
        <img src="../assets/syibu.png" />
      </div>
      <div
        v-show="presentProcedure == 2 && !featureIsShow && !onlySee"
        id="RockerBorder"
        v-on:touchmove.passive="RockerMove"
        v-on:touchstart="RockerDown"
        @touchend="RockerUp"
        data-typeid="moveMesh"
      >
        <div id="Rocke"></div>
      </div>
      <!--<div v-for="(dataitem, arrindex) in  HierarchicalDisplay.dataArr">
              <div>  
               <div   v-for="(item, index) in  dataitem" > 
                  <label v-bind:class="item.ID==HierarchicalDisplay.selectData[arrindex].ID ? 'labelclasSelect' : '' "  v-on:click="getData" class="labelclass" v-bind:data-index="arrindex+1" v-bind:data-itemindex="index"> {{item.NAME}} </label>
               </div>
              </div>
          </div> -->
      <div
        class="snapshootBox"
        v-show="presentProcedure !== 1 && presentProcedure !== 5 && !onlySee"
      >
        <!-- <canvas id="leftCanvas" class="snapItem"></canvas> -->
        <canvas id="topCanvas" class="snapItem"></canvas>
        <!-- <canvas id="rightCanvas" class="snapItem"></canvas> -->
      </div>
      <!-- <label style="position: absolute; top: 6px; right: 38%; color: #fff">{{
        Rocker.utypeShowText[Rocker.utype]
      }}</label> -->
      <div class="leftOperCountent" v-if="presentProcedure == 2 && !onlySee">
        <div class="right">
          <div @click="removeMesh(MouseEventData.selectName, true)">
            <img src="../assets/del.png" alt="" />
          </div>
  
          <div @click="buttonNextMesh(-1)">
            <img src="../assets/qh-shangyig.png" alt="" />
          </div>
          <div @click="buttonNextMesh(1)">
            <img src="../assets/qh-xiayig.png" alt="" />
          </div>
        </div>
      </div>
  
      <div class="shadowBox" v-if="showtoPendulum" @click="toPendulum(false)">
        <div class="middioBox">
          <div class="elementItemBox penbox">
            <div
              class="elementItems"
              v-for="(item, index) in laidModel"
              :key="index"
              style="height: 82px"
              :class="
                item.id == curdelItem?.id
                  ? 'activeItemSlect elementItems'
                  : 'elementItems'
              "
              @click.stop="penSelect(item)"
            >
              <p>{{ item.desc }}</p>
              <img :src="item.img" alt="" />
              <p
                :class="item.id == curdelItem?.id ? 'activeItemselectTit ' : ''"
                v-if="item.price"
              >
                {{ `￥${item.price}/${item.unm}`
                }}<span v-if="item.unit">{{ item.unit }}</span>
              </p>
            </div>
          </div>
          <div class="elementTitBox">
            <div style="width: 100%">
              <p class="elementItem currtitle">已摆放</p>
            </div>
          </div>
          <div class="deleteBox" @click.stop="delAllCurModel">
            <img src="../assets/del.png" alt="" /> 删除
          </div>
        </div>
      </div>
  
      <div
        :class="presentProcedure == 2 ? 'shadowBox' : ''"
        v-if="presentProcedure == 1 || (presentProcedure == 2 && showElement)"
        @click="toShowElement"
      >
        <div
          class="middioBox"
          @click.stop="clickMiddio"
          :class="presentProcedure == 2 ? 'rightcenter' : ''"
        >
          <div class="elementItemBox">
            <div
              class="elementItems"
              v-for="(item, index) in cakeSelect[activeNames].selectList"
              :key="index"
              :data-stype="cakeSelect[activeNames].selectId"
              :id="item.id"
              :data-desc="item.desc"
              :data-item="JSON.stringify(item)"
              :data-index="index"
              @click.stop="baseDivClick"
              :class="
                index == cakeSelect[activeNames].curSelectIndex
                  ? 'activeItemSlect '
                  : ''
              "
            >
              <p>{{ item.name }}</p>
              <img :src="item.img" alt="" />
              <p
                v-if="item.price"
                :class="
                  index == cakeSelect[activeNames].curSelectIndex
                    ? 'activeItemselectTit '
                    : ''
                "
              >
                {{ `￥${item.price}/${item.unm}`
                }}<span v-if="item.unit">{{ item.unit }}</span>
              </p>
            </div>
          </div>
          <div class="elementTitBox">
            <div
              v-for="(item, index) in cakeSelect"
              :key="index"
              style="width: 100%"
            >
              <p
                class="elementItem"
                :class="index == activeNames ? 'currtitle' : ''"
                @click.stop="openDetail(item, index)"
                v-if="
                  (item.selectId == 'cakebase' && presentProcedure == 1) ||
                  (item.selectId == 'caKeUp' && presentProcedure == 1)
                "
              >
                {{ item.Name }}
              </p>
              <p
                class="elementItem"
                :class="index == activeNames ? 'currtitle' : ''"
                @click.stop="openDetail(item, index)"
                v-if="
                  (item.selectId == 'caKe01' && presentProcedure == 2) ||
                  (item.selectId == 'caKe02' && presentProcedure == 2) ||
                  (item.selectId == 'caKe03' && presentProcedure == 2)
                "
              >
                {{ item.Name }}
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <div
        class="upperArea"
        v-if="
          this.presentProcedure == 1 ||
          this.presentProcedure == 2 ||
          this.presentProcedure == 3
        "
      >
        <div class="left" v-if="presentProcedure !== 1 && !onlySee">
          <div
            class="toShowElement"
            @click="changeNext(1, 'one')"
            v-if="presentProcedure == 2"
          >
            <img src="../assets/syibu.png" />
          </div>
          <div @click="changeGlable(true)">
            <img src="../assets/quanju-cd.png" />
          </div>
        </div>
  
        <div class="right" v-if="presentProcedure == 2 && !onlySee">
          <div
            class="toShowElement"
            @click="toPendulum(true)"
            :class="showtoPendulum ? 'whiteBack' : ''"
          >
            <img v-if="!showtoPendulum" src="../assets/beibao.png" alt="" />
            <img v-else src="../assets/beibao-xz.png" alt="" />
          </div>
  
          <div
            class="toShowElement"
            @click="toShowElement"
            :class="showElement ? 'whiteBack' : ''"
          >
            <img v-if="!showElement" src="../assets/zhuangshi.png" alt="" />
            <img v-else src="../assets/zhuangshi-xz.png" alt="" />
          </div>
        </div>
  
        <div
          class="left"
          v-if="presentProcedure == 2 && !onlySee"
          style="margin-left: 10px"
        >
          <div
            class="toShowElement"
            @click="changeModels"
            :class="isShowModelValueChange ? 'whiteBack' : ''"
          >
            <img
              v-if="!isShowModelValueChange"
              src="../assets/huitu.png"
              alt=""
            />
            <img v-else src="../assets/huituing.png" alt="" />
          </div>
        </div>
        <!-- <div class="right" v-if="presentProcedure == 2">
     
  
          <div class="toShowElement" @click="changeNext(3, 'twoNext')">
            <img src="../assets/wancgg.png" alt="" />
          </div>
        </div> -->
      </div>
      <div class="rightArea" v-if="presentProcedure == 2 && featureIsShow">
        <div
          class="top"
          v-on:touchstart="RockerMeshUpStart"
          @touchend="RockerMeshUpStop"
        >
          <img src="../assets/spxyi.png" alt="" />
        </div>
        <img
          src="../assets/qiuti-sx.png"
          style="width: 26px; height: 26px"
          alt=""
        />
        <div
          class="top"
          v-on:touchstart="RockerMeshDownStart"
          @touchend="RockerMeshDownStop"
        >
          <img src="../assets/spsyi.png" alt="" />
        </div>
      </div>
  
      <div class="LowerRightArea" v-if="presentProcedure == 2 && featureIsShow">
        <div
          id="XDOWN"
          data-rtype="X"
          data-rval="0.1"
          v-on:touchstart="buttonRotateStart"
          @touchend="buttonRotateStop"
          class="locatOne"
        >
          <img src="../assets/xiazhuan.png" />
        </div>
        <div
          id="XUP"
          data-rtype="X"
          data-rval="-0.1"
          v-on:touchstart="buttonRotateStart"
          @touchend="buttonRotateStop"
          class="locatTwo"
        >
          <img src="../assets/shangzhuan.png" />
        </div>
  
        <div
          class="locatthree"
          id="ZRIGHT"
          data-rtype="Z"
          data-rval="-0.1"
          v-on:touchstart="buttonRotateStart"
          @touchend="buttonRotateStop"
        >
          <img src="../assets/youzhuan.png" />
        </div>
  
        <div
          class="locatFour"
          id="ZLEFT"
          data-rtype="Z"
          data-rval="0.1"
          v-on:touchstart="buttonRotateStart"
          @touchend="buttonRotateStop"
        >
          <img src="../assets/zuozhuan.png" />
        </div>
      </div>
  
      <div
        v-if="showAlignBox"
        class="shadowBox"
        @click="changeAlignShow"
        style="background: none"
      >
        <div class="alignLineBox">
          <div class="top">
            <p class="aliginItem"><img src="../assets/Xzqp.png" /> x轴齐平</p>
            <p class="aliginItem"><img src="../assets/Zzqp.png" />z轴齐平</p>
          </div>
          <div class="bottom">
            <p class="aliginItem"><img src="../assets/hrao.png" />环绕</p>
            <p class="aliginItem"><img src="../assets/4fz1.png" />摆1/4</p>
            <p class="aliginItem"><img src="../assets/2fz1.png" />摆1/2</p>
          </div>
        </div>
      </div>
      <div class="shadowBox" v-if="showGlobalValue" @click="changeGlable(false)">
        <div class="globalButton">
          <p @click="saveAllData">
            <img src="../assets/qj-baoc.png" alt="" />保存
          </p>
          <p data-typeid="Preview" @click="Preview()" v-if="!ynPreview">
            <img src="../assets/qj-yulan.png" alt="" />预览
          </p>
          <p data-typeid="closePreview" @click="closePreview()" v-if="ynPreview">
            <i class="el-icon-video-play"></i>退出预览
          </p>
  
          <p @click="deleteAllData"><i class="el-icon-delete"></i>删除</p>
          <p @click="quit">
            <img src="../assets/qj-tuichu.png" alt="" />
            退出
          </p>
        </div>
      </div>
      <!-- //特写 -->
      <div
        class="featureBox"
        v-if="!featureIsShow && presentProcedure == 2 && !onlySee"
        data-typeid="close_Upin"
        @click="close_Upin"
      >
        <img src="../assets/fangda.png" alt="" />
      </div>
      <div
        class="featureBox"
        v-else-if="featureIsShow && presentProcedure == 2"
        data-typeid="close_UpOut"
        v-on:click="close_UpOut"
      >
        <img src="../assets/tuicfd.png" alt="" />
      </div>
      <!-- 发射切换 -->
      <div
        class="switchingEmission"
        v-if="presentProcedure == 2 && !featureIsShow && !onlySee"
      >
        <p @click="transmit"><img src="../assets/fasha.png" alt="" /></p>
        <p @click="RockerNextOtype"><img src="../assets/qiehuan.png" alt="" /></p>
      </div>
      <!-- 步骤一 -->
      <div class="choseCake" v-if="presentProcedure == 1">
        <span style="color: white">蛋糕尺寸：</span>
        <p
          v-for="(item, index) in cakeSizeList"
          :key="index"
          :class="curCakeSizeChose == index ? 'curCakeSize' : ''"
          @click="changeCakeSize(index)"
        >
          {{ item.text }}
        </p>
      </div>
      <p
        class="nextButton"
        v-if="presentProcedure == 1"
        @click="changeNext(2, 'oneNext')"
      >
        下一步
      </p>
      <div class="nextModels" v-if="presentProcedure == 2 && curNextModel.img">
        <div class="text">下一个</div>
        <div class="degress">
          <p>x: {{ curNextModel.degressX }}°</p>
          <p>z: {{ curNextModel.degressZ }}°</p>
        </div>
        <img :src="curNextModel.img" alt="" />
        <div class="left" @click="toShowAlign">
          <img src="../assets/qiping.png" alt="" />
        </div>
      </div>
      <div class="shadowBox shadValue" v-if="modelLoading">
        <div style="width: 80%" class="process">
          <el-progress
            :text-inside="true"
            :stroke-width="22"
            :percentage="percentage"
            status="warning"
          ></el-progress>
          <p>数据载入中...</p>
          <!-- <canvas width="50" height="50" id="canLading"></canvas> -->
          <!-- <img src="../assets/光效.gif" alt="" /> -->
        </div>
      </div>
      <div
        class="saveMoneybox payFor"
        v-if="presentProcedure == 2 && !featureIsShow && !onlySee"
        @click="saveMoneybox"
      >
        <p>
          <img src="../assets/jiesuan.png" alt="" />
        </p>
        去结算
      </div>
      <div
        class="switchingEmission"
        v-if="presentProcedure == 4 || presentProcedure == 5"
        style="top: 20%"
      >
        <p @click="toCakeOne">
          <img src="../assets/chongzhi.png" alt="" style="width: 28px" />
        </p>
        <p @click="changeUpCake">
          <img src="../assets/qj-tuichu.png" alt="" style="width: 28px" />
        </p>
      </div>
      <!-- <div
        v-if="presentProcedure == 4"
        class="saveMoneybox"
        @click="saveMoneybox"
      >
        <p style="bottom: 23%">
          <img src="../assets/jiesuan.png" alt="" />
        </p>
        去结算
      </div> -->
      <div
        v-if="presentProcedure == 5"
        class="saveMoneybox2 saveMoneybox"
        @click="giveValueToWx"
      >
        <p style="bottom: 23%">
          <img src="../assets/fukuan.png" alt="" />
        </p>
        加购
      </div>
      <div class="finalStatement" v-if="presentProcedure == 5">
        <p class="topTitles1">- 蛋糕清单 -</p>
        <div class="table">
          <div class="title">
            <p>名称</p>
            <p>个数</p>
            <p>金额</p>
          </div>
          <div class="tableValues">
            <div class="lines">
              <p>蛋糕基础价格</p>
              <p></p>
              <p>{{ basePrice }}</p>
            </div>
            <div
              class="lines"
              v-for="(item, index) in settlementList"
              :key="index"
            >
              <p>{{ index + 1 }}.{{ item.newName }}</p>
              <p>{{ item.sum }}{{ item.unit }}</p>
              <p>{{ item.money }}</p>
            </div>
          </div>
          <div class="aggregate">
            <p>总计：</p>
            <p>{{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js";
  import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js";
  
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  
  import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
  
  import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
  
  import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
  // 压缩模型包
  import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
  import wx from "jweixin-module";
  import { OBB } from "three/examples/jsm/math/OBB.js";
  
  export default {
    components: {},
    data() {
      return {
        fillModelArr: [],
        shareParm1: 0.5,
        shareParm2: 0.7,
        shareCopyParm: "",
        shareFillParm: 43,
        isShowModelValueChange: false,
        ShareFlag: "myShare_",
        test: {},
        onlySee: false,
        basePrice: 0, //蛋糕基础价
        allCakeid: null, //蛋糕id
        modelLoading: true, //模型加载中,
        percentage: 0, //加载进度条
        popupPosition: -50,
        close_UpinMode: false,
        //给消息框设置的消息集合，每个消息一个键值，每个键值对应一个集合,每次随机获取一个消息
        myMessageRage: {
          timer: null,
          tiket: 1000,
          getMeg: function (msgKey) {
            const index = Math.floor(Math.random() * this[msgKey].length);
  
            return this[msgKey][index];
          },
          errkey: "error",
          skinkey: "skin",
          skinkey2: "skin2",
          sweetkey: "sweet",
          delTips: "deltip",
          tipsValue: "skin3",
          notransmitkey: "notransmit", //不能发射
          nomovekey: "nomove",
          skin: ["选择一个外观", "请选择蛋糕胚", "你不做第一步我很难办"],
          skin2: ["请选择蛋糕外观"],
          skin3: ["请选择一个摆件"],
          deltip: ["请选择需要全部删除的摆件"],
          sweet: [
            "奶油、必须有",
            "选一个奶油呗",
            "巧师傅难做无奶油的蛋糕",
            "不选奶油我放盐巴了啊！",
          ],
          notransmit: [
            "对不起，有人了",
            "这里不行哦",
            "哎吆~~~，你干嘛啊",
            "STOP!!",
            "换一个位置啦！",
          ],
          nomove: [
            "不能再走了",
            "好了撞墙了",
            "不要为难我了，走不动了",
            "换一个方向啦！",
          ],
          error: ["没有找到这个内容哦", "这个操作是禁止的", "缺失一步操作"],
        },
        /*描述摇杆相关信息的操作在这里  调整样式后只需要调整圆心的参数即可 父控件的id  ,
                      目前摇杆的设定是一个同心圆，外圈半径是内圈半径的2倍
                      新控件更改圆心的位置 父控件的id和二号摇杆的id  两个属性即可
                      */
        rockerRate: 1,
        Rocker: {
          buttonRotateData: null, //上下左右按键时候的
          NumberofBullets: 0, //子弹数
          yUpDirection: false,
          yDownDirection: false,
          utypeRange: { SingleMove: "SingleMove", ShootingMode: "ShootingMode" }, //更改手柄的操作模式
          utypeShowText: {
            SingleMove: "选择一个模型，操作摇杆移动",
            ShootingMode: "选中并发射某一个插件",
          }, //更改手柄的操作模式
          utype: "ShootingMode",
          nextOtype: function () {
            //就是为了不重复而已
            if (!this.typeArrBuffx1077) {
              this.typeArrBuffx1077 = [];
              for (var item in this.utypeRange) {
                this.typeArrBuffx1077.push(item);
              }
            }
            const index = this.typeArrBuffx1077.indexOf(this.utype);
            if (index < this.typeArrBuffx1077.length - 1) {
              this.utype = this.typeArrBuffx1077[index + 1];
            } else {
              this.utype = this.typeArrBuffx1077[0];
            }
            return this.utype;
          },
          target: null,
          get target() {
            if (!this._target) {
              this._target = document.querySelector("#Rocke");
            }
            return this._target;
          },
          yndwon: false,
          getXY: function (pm_xy) {
            return Number(pm_xy.replace("px", ""));
          },
          reset: function () {
            this.retAngle = null;
            this.target.style.top = this.target.offsetWidth / 2 + "px";
            this.target.style.left = this.target.offsetHeight / 2 + "px";
          },
          Center: { x: 50, y: 50 }, //圆心
          R: null,
          get R() {
            //半径
            if (!this._R) {
              this._R = this.target.offsetWidth / 2;
            }
            return this._R;
          },
          RockerBorder: "RockerBorder", //父控件的H5中id
          Rocker2Border: "Rocker2Border", //二号摇杆  用于旋转
          retAngle: null,
  
          getRockeAngle: function (
            e //获取摇杆的角度更新遥感的位置
          ) {
            if (!this.yndwon) {
              return;
            }
            var x = 0,
              y = 0;
            if (
              e.target.id == this.RockerBorder ||
              e.target.id == this.Rocker2Border
            ) {
              x =
                e.touches[0].clientX -
                e.touches[0].target.offsetParent.offsetLeft -
                this.Center.x;
              y =
                e.touches[0].clientY -
                e.touches[0].target.offsetParent.offsetTop -
                this.Center.y;
            } else {
              x =
                this.getXY(this.target.style.left) +
                e.touches[0].clientX -
                e.touches[0].target.offsetParent.offsetLeft -
                this.Center.x;
              y =
                this.getXY(this.target.style.top) +
                e.touches[0].clientY -
                e.touches[0].target.offsetParent.offsetTop -
                this.Center.y;
            }
            const xlen = Math.sqrt(x * x + y * y);
            if (xlen < 5) {
              this.reset();
              return;
            }
            const sinA = y / xlen,
              cosA = x / xlen;
            const newPointx =
              this.R * cosA + this.Center.x - this.target.offsetWidth / 2;
            const newPointy =
              this.R * sinA + this.Center.y - this.target.offsetHeight / 2;
            this.target.style.top = newPointy + "px";
            this.target.style.left = newPointx + "px";
            this.retAngle = { x: cosA, y: sinA };
          },
        },
        PreviousCache: {}, //上一个模型缓存的名字
        poiaimingPointnt: null, //{x,y,endPoint}   x，y是屏幕坐标  endPoint是终点  瞄准点，手柄后续的操作就是这个玩意
        activeNames: 0,
        totalPrice: 0,
        activeItems: 0,
        showAlignBox: false,
        showPopList: false,
        showGlobalValue: false,
        showPopupDiv: false, //是否展示弹层
        showElement: false, //是否展示元素框
        curSelectItemId: null,
        showtoPendulum: false, //是否展示已摆框
        featureIsShow: false, //是否进入特写
        curCakeSizeChose: 0,
        curNextModel: {
          degressX: 0,
          degressZ: 0,
          img: "",
        }, //下一个模型
        curdelItem: null,
        laidModel: [],
        cakeSizeList: [
            { text: "四寸（2-4人）", size: 4, spid:'10906140046', SNAME:'美羊羊香草蛋糕4寸'},
            { text: "六寸（4-6人）", size: 6, spid:'10901140091', SNAME:'美羊羊香草蛋糕6寸' },
            { text: "八寸（6-8人）", size: 8, spid:'10901140092' , SNAME:'美羊羊香草蛋糕8寸'},
            { text: "十寸（8-12人）", size: 10, spid:'10901140093', SNAME:'美羊羊香草蛋糕10寸' },
        ],
        presentProcedure: 1,
        scene: null, //场景
        material: null, //材质
        camera: null, //摄影机  lookAt()  三维坐标来设置观察点
        mesh2d:[],//装载2d模型的集合，后续应该会添加到主模型中
        mesh: [], //感觉是渲染某个模型，使用图形和材质进行渲染
        cameraInit: { width: 500, height: 500, fov: 100, near: 0.1, far: 1000 },
        renderer: null, //渲染器
        css3render: null, //css3渲染器
        myCanvas: null, //自己设置的画布，方便加载事件的各种参数
        cameraLoction: null, //相机的位置
        sphere: null,
        raycaster: null,
        EachRotateY: 0, //摄像头旋转的角度
        Ry: 0, //半径
        scint: 12, //模型导入之后默认的放大倍数；
        control: null, //轨道相机
        controls2: null, //2号轨道相机
        cakeTemp: "./Sweet pack.glb",
        allValue: [],
        gltfScene: {}, //外部载入的场景
        gltfbb: {},
        boxflag: "_box", //包围盒的名称
        labelflag: "_2dLabel", //2d object 的后缀
        labelline: "_2dlabelLine", //线的标签
        mixerAnimat: null, //动画播放器
        dropSelect: {}, //拖动的时候鼠标按下选择的组件
        cakeParmName: { cakebase: "cakebase", caKeUp: "caKeUp" },
        cpoint: { x: 0, y: 0, z: 866 }, //摄像头的初始位置   1.732/2  * cameraInit.width
        moveLine: null, //创建移动的时候的虚线线，鼠标放开的时候使模型沿着此条线移动
        ynPreview: false, //是否是在预览的模式
        othersRenderer: [], //其他的场景渲染
        SPID: "10901140091", //蛋糕id   暂时取固定蛋糕 6寸
        spPrice: "123", //蛋糕基础售价
        //备选的模型
        cakeSelect: [
          {
            selectId: "cakebase",
            Name: "蛋糕胚",
            curSelectIndex: 0,
            selectList: [
              {
                id: "Yuanpeidangao",
                name: "原胚蛋糕",
                img: "./images/1yuanpei.png",
                selected: false,
                desc: "原胚蛋糕",
                unm: 1,
                money: 29,
                price: "1.9",
              },
              {
                id: "Hesejiaxindangao",
                name: "褐色夹心蛋糕",
                img: "./images/14heisedg.png",
                selected: false,
                desc: "褐色夹心蛋糕",
                unm: 1,
                money: 29,
                price: "1.9",
              },
              {
                id: "YYsjiaxindg",
                name: "黄色夹心蛋糕",
                img: "./images/16hsjxdg.png",
                selected: false,
                desc: "黄色夹心蛋糕",
                unm: 1,
                money: 29,
                price: "1.9",
              },
              {
                id: "Naiyoudangao",
                name: "奶油蛋糕",
                img: "./images/4naiyou.png",
                selected: false,
                desc: "奶油蛋糕",
                unm: 1,
                money: 29,
                price: "1.9",
              },
              {
                id: "Qiaokelidangao",
                name: "巧克力蛋糕",
                img: "./images/6qkldg.png",
                selected: false,
                desc: "巧克力蛋糕",
                unm: 1,
                money: 29,
                price: "1.9",
              },
            ],
          },
          {
            selectId: "caKeUp",
            Name: "蛋糕外观",
            curSelectIndex: 0,
            selectList: [
              {
                id: "Binganbang",
                name: "饼干棒",
                img: "./images/15szbg.png",
                selected: false,
                desc: "饼干棒",
                unm: 1,
                money: 29,
                price: "1.9",
              },
              {
                id: "polySurface2751190",
                name: "杏仁片",
                img: "./images/9xrpcc.png",
                selected: false,
                desc: "杏仁片",
                unm: 1,
                money: 29,
                price: "1.9",
              },
            ],
          },
          {
            selectId: "caKe01",
            Name: "水果",
            maxnum: 100,
            minnum: 1,
            selectList: [
              {
                id: "Caomei",
                name: "草莓",
                img: "./images/12caomei.png",
                selected: false,
                direction: "up",
                maxnum: 56,
                desc: "草莓",
                sum: 0,
                money: 29,
                price: 8.5,
                unit: "个",
                unm: 1,
                money: 0,
                price: "1.9",
              },
              {
                id: "Lanmei",
                name: "蓝莓",
                img: "./images/13lammei.png",
                selected: false,
                desc: "蓝莓",
                direction: "up",
                maxnum: 7,
                unm: 1,
  
                price: "1.9",
                sum: 0,
                money: 0,
              },
              {
                id: "Mangguoding",
                name: "芒果丁",
                img: "./images/11mguod.png",
                selected: false,
                maxnum: 2,
                desc: "芒果丁",
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
            ],
          },
          {
            selectId: "caKe02",
            Name: "饼干",
            maxnum: 10,
            minnum: 1,
            selectList: [
              {
                id: "Aoliaobingan",
                name: "奥利奥饼干",
                img: "./images/3aolao.png",
                selected: false,
                maxnum: 10,
                desc: "奥利奥饼干",
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
              {
                id: "Fangkuaibingan",
                name: "方块饼干",
                img: "./images/8fkbg.png",
                selected: false,
                maxnum: 10,
                desc: "方块饼干",
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
              {
                id: "Jiaxinbingan",
                name: "夹心饼干",
                img: "./images/2jxbg.png",
                selected: false,
                maxnum: 10,
                desc: "夹心饼干",
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
              {
                id: "Qiaokelibingan",
                name: "巧克力饼干",
                img: "./images/7qklbg.png",
                selected: false,
                direction: "up",
                desc: "巧克力饼干",
                maxnum: 10,
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
              {
                id: "Qiaokelixiong",
                name: "巧克力熊",
                img: "./images/5bear.png",
                selected: false,
                desc: "巧克力熊",
                direction: "up",
                maxnum: 3,
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
            ],
          },
          {
            selectId: "caKe03",
            Name: "插牌",
            maxnum: 1,
            minnum: 1,
            selectList: [
              {
                id: "Shengripai",
                name: "生日牌",
                img: "./images/10srpai.png",
                selected: false,
                desc: "生日牌",
                maxnum: 1,
                unm: 1,
                sum: 0,
                money: 0,
                price: "1.9",
              },
            ],
          },
        ],
        //用户添加的模型，进行记录
        userSelect: {
          cakebase:
            {} /*{id:"xxxxx", name:""}      模型的名称   id是模型的模板   两个字段相等的，方便写代码   再加入一个desc */,
          caKeUp:
            {} /*{id:"xxxxx", name:""}      模型的名称   id是模型的模板   两个字段相等的，方便写代码  */,
          caKe01:
            [] /*{id:"xxxxx", name:"",position:{x,y,z},point:{x,y},angle:{x,y,z},lock:false}   position  三维坐标  point 屏幕坐标   模型的名称   id是模型的模板,旋转的角度,lock 是否锁定 锁定的不能旋转和选中*/,
          caKe02:
            [] /*{id:"xxxxx", name:"",position:{x,y,z},point:{x,y}}   position  三维坐标  point 屏幕坐标   模型的名称   id是模型的模板*/,
          caKe03: [],
        },
        //拖动和旋转的时候使用数据结构，在点击，移动和鼠标抬起的时候会修改此处的数组
        MouseEventData: {
          downPoint: { x: 0, y: 0 },
          mesh: null, //某型的数组
          selectName: "", //选中时候赋值，用来做删除
          rotateXy: 0.0002, //基础的旋转角度
          oldP: {}, //点击的时候，原来的坐标位置
          oldPzero: {}, //鼠标点击的时候，的零点
          opType: "", //MOVE   //
          getRotate: function (pm_x, pm_y) {
            var ret = {};
            ret.axle =
              Math.abs(this.downPoint.x - pm_x) -
                Math.abs(this.downPoint.y - pm_y) >
              0
                ? "Z"
                : "X";
            ret.rotate =
              Math.abs(this.downPoint.x - pm_x) -
                Math.abs(this.downPoint.y - pm_y) >
              0
                ? this.downPoint.x - pm_x
                : pm_y - this.downPoint.y;
            ret.rotate = ret.rotate * this.rotateXy;
            return ret;
          },
          saveData: {},
        },
        animationFrameId: null,
        showPopGifl: false,
        settlementList: [], //结算清单
        seeDate: null,
        mySharePoint: function (x, y, startRadian, endRadian, R) {
          let retPoint = { point: { x: 0, y: 0 } };
  
          retPoint.point.x = x;
          retPoint.point.y = y;
          retPoint.startRadian = startRadian;
          retPoint.endRadian = endRadian;
          retPoint.R = R;
          return retPoint;
        },
        myShareType: {
          Arc: "Arc", //  圆弧到圆 参数1弧度   半径默认100
          CircularArc: "CircularArc", //  参数1弧度   半径默认100
          Rect: "Rect", //  没有参数    边长默认100
          Triangle: "Triangle", //  没有参数    边长默认100
          Triangle90Left:"Triangle90Left",         //  直角三角形 60度  30度
          Triangle90Right:"Triangle90Right",         //  
          Windmill: "Windmill",
        }, //  没有参数    默认90度
        //  Leaf:"Leaf",               //  可以使用椭圆代替，暂时去掉
        myShare: function (pm_myShareType) {
          let shapex = {};
  
          const argsArray = [...arguments];
  
          argsArray.splice(0, 1);
  
          let R = 70;
          // pm_pointDescArr 包含一个vector和一个弧度值
          const shape = new THREE.Shape();
  
          //计算一定长度上可以放置几个
          shapex.Arc = function (pm_radian) {
            let x = R * Math.cos(-pm_radian / 2);
            let y = R * Math.sin(-pm_radian / 2);
            let x1 = R * Math.cos(pm_radian / 2);
            let y1 = R * Math.sin(pm_radian / 2);
            shape.absarc(0, 0, R, -pm_radian / 2, pm_radian / 2);
            shape.lineTo(0, 0);
            shape.lineTo(x, y);
  
            let arr = [];
            arr.push({ x: R, y: 0 });
            arr.push({ x: x, y: y });
            arr.push({ x: x1, y: y1 });
  
            return arr;
          };
  
          shapex.CircularArc = function (pm_radian, pm_Rtan) {
            if (pm_Rtan == null) {
              pm_Rtan = 0.5;
            }
            let x = R * Math.cos(-pm_radian / 2);
            let y = R * Math.sin(-pm_radian / 2);
  
            let x1 = R * Math.cos(pm_radian / 2);
            let y1 = R * Math.sin(pm_radian / 2);
  
            //绝对圆弧
            shape.absarc(0, 0, R, -pm_radian / 2, pm_radian / 2);
  
            if (pm_radian < 2 * Math.PI) {
              shape.lineTo(0, 0);
              shape.lineTo(x, y);
            }
            var path1 = new THREE.Path();
            let x3 = R * pm_Rtan * Math.cos(-pm_radian / 2);
            let y3 = R * pm_Rtan * Math.sin(-pm_radian / 2);
            let x4 = R * pm_Rtan * Math.cos(pm_radian / 2);
            let y4 = R * pm_Rtan * Math.sin(pm_radian / 2);
            path1.absarc(0, 0, R * pm_Rtan, -pm_radian / 2, pm_radian / 2);
            if (pm_radian < 2 * Math.PI) {
              path1.lineTo(0, 0);
              path1.lineTo(x, y);
            }
            shape.holes.push(path1);
  
            let arr = [];
            arr.push({ x: 0, y: R });
            arr.push({ x: x, y: y });
            arr.push({ x: x1, y: y1 });
            arr.push({ x: 0, y: R * pm_Rtan });
            arr.push({ x: x3, y: y3 });
            arr.push({ x: x4, y: y4 });
  
            return arr;
          };
  
          shapex.Rect = function () {
            shape.moveTo(R / 2, R / 2);
            shape.lineTo(-R / 2, R / 2);
            shape.lineTo(-R / 2, -R / 2);
            shape.lineTo(R / 2, -R / 2);
  
            let arr = [];
            arr.push({ x: R / 2, y: R / 2 });
            arr.push({ x: -R / 2, y: R / 2 });
            arr.push({ x: -R / 2, y: -R / 2 });
            arr.push({ x: R / 2, y: -R / 2 });
            return arr;
          };
  
          shapex.Triangle = function () {
            shape.moveTo(0, R / 3.464);
            shape.lineTo(-R / 2, -R / 3.464);
            shape.lineTo(R / 2, -R / 3.464);
            shape.lineTo(0, R / 3.464);
  
            let arr = [];
            arr.push({ x: 0, y: R / 3.464 });
            arr.push({ x: -R / 2, y: -R / 3.464 });
            arr.push({ x: R / 2, y: -R / 3.464 });
            return arr;
          };
  
          shapex.Triangle90Left =function()   // 30度和60度的直角三角形1
          {
              let x1 = 0;
              let y1 = 0;
              // let x2 = right ? -R : R;   //三角形直角边在左边R   在右边-R
              let x2 = R/2;   
              let y2 = -0.866*R;
              let x3 = -R/2;
              let y3 = -0.866*R;;
              let x4 = -R/2;
              let y4 =  0.866*R;;
              // 绘制直角三角形
              shape.moveTo(x1, y1);
              shape.lineTo(x2, y2);
              shape.lineTo(x3, y3);
              shape.lineTo(x4, y4);
              shape.lineTo(x1, y1);
  
              // 返回直角三角形的顶点坐标
              let arr = [];
              arr.push({ "x": x1, "y": y1 });
              arr.push({ "x": x2, "y": y2 });
              arr.push({ "x": x3, "y": y3 });
              arr.push({ "x": x4, "y": y4 });
              return  arr;
          };
  
          shapex.Triangle90Right =function()   // 30度和60度的直角三角形2
          {
              let x1 = 0;
              let y1 = 0;
              // let x2 = right ? -R : R;   //三角形直角边在左边R   在右边-R
              let x2 = -R/2;
              let y2 = -0.866*R;
              let x3 = R/2;   
              let y3 = -0.866*R;
              let x4 = R/2;
              let y4 =  0.866*R;;
              // 绘制直角三角形
              shape.moveTo(x1, y1);
              shape.lineTo(x2, y2);
              shape.lineTo(x3, y3);
              shape.lineTo(x4, y4);
              shape.lineTo(x1, y1);
  
              // 返回直角三角形的顶点坐标
              let arr = [];
              arr.push({ "x": x1, "y": y1 });
              arr.push({ "x": x2, "y": y2 });
              arr.push({ "x": x3, "y": y3 });
              arr.push({ "x": x4, "y": y4 });
              return  arr;
          };
  
          shapex.Windmill = function () {
            shape.moveTo(0, 0);
            let arr = [];
            let p2 = this.mySharePoint(R / 2, 0, 0, Math.PI, R / 2);
            let p3 = this.mySharePoint(
              0,
              R / 2,
              Math.PI / 2,
              (3 * Math.PI) / 2,
              R / 2
            );
            let p4 = this.mySharePoint(-R / 2, 0, Math.PI, 2 * Math.PI, R / 2);
            let p5 = this.mySharePoint(
              0,
              -R / 2,
              -Math.PI / 2,
              Math.PI / 2,
              R / 2
            );
            let pm_pointDescArr = [p2, p3, p4, p5];
            for (var i = 0; i < pm_pointDescArr.length; i++) {
              let item = pm_pointDescArr[i];
              shape.absarc(
                item.point.x,
                item.point.y,
                item.R,
                item.startRadian,
                item.endRadian
              );
  
              arr.push({ x: 0, y: 0 });
              arr.push({ x: item.point.x, y: item.point.y });
              if (i % 2 == 0) {
                arr.push({ x: item.point.x * 2, y: item.point.y });
                arr.push({ x: item.point.x, y: item.point.x });
              } else {
                arr.push({ x: item.point.x, y: item.point.y * 2 });
                arr.push({ x: -item.point.y, y: item.point.y });
              }
            }
          };
  
          shapex.Leaf = function () {
            shape.absarc(-0.866 * R, 0, R, -Math.PI / 6, Math.PI / 6);
            shape.absarc(0.866 * R, 0, R, (Math.PI * 5) / 6, (Math.PI * 7) / 6);
  
            let arr = [];
            arr.push({ x: 0, y: R / 3.464 });
            arr.push({ x: -R / 2, y: -R / 3.464 });
            arr.push({ x: R / 2, y: -R / 3.464 });
            return arr;
          };
          shape.LinearInequality = function (len, meshlen) {
            let lentime = parseInt(len / meshlen);
  
            let lenoffset = parseInt(len % meshlen);
            if (lentime > 1) {
              lenoffset = parseInt(lenoffset / (lentime - 1));
            } else {
              lenoffset = parseInt(lenoffset / lentime);
            }
  
            return { time: lentime, offset: lenoffset };
          };
          /*
                  一个十分复杂又常用的方法
                  pm_xStart，x轴开始的起点，和圆弧相关的内容，一般都是半径，矩形类是长的一半
                  pm_xlen  ，x轴计算的长度   和圆弧相关的内容，一般都是直径，矩形类是长
                  pm_ymax  ，传入的是一个方法，用来计算y的上边界
                  pm_ymin   , 同上是下边界
                  pm_width     模型x轴的长度
                  pm_height    模型z轴的长度
                  ref_Arr 返回的所有点的数组
                  ref_edgeArr 填充到边界点的数组
                  */
          shapex.computePoints = function (
            pm_xStart,
            pm_xlen,
            pm_ymax,
            pm_ymin,
            pm_width,
            pm_height,
            ref_Arr,
            ref_edgeArr
          ) {
            let retXtime = mesh.userData.LinearInequality(
              pm_xlen - pm_width,
              pm_width
            );
            let ysatrt = pm_ymax(pm_xStart, pm_xStart);
            let yend = pm_ymin(pm_xStart, pm_xStart);
            ref_edgeArr.push(new THREE.Vector3(pm_xStart, ysatrt, 0));
            //开始的的边界
            if (yend != ysatrt && ysatrt - yend - pm_height > 0) {
              ref_edgeArr.push(new THREE.Vector3(pm_xStart, yend, 0));
              let YAxis = ysatrt - yend;
              let retYtime = mesh.userData.LinearInequality(
                YAxis - pm_height,
                pm_height
              );
              for (var zz = 0; zz < retYtime.time; zz++) {
                let newy =
                  ysatrt - pm_height - (pm_height + retYtime.offset) * zz;
                var v13 = new THREE.Vector3(pm_xStart, newy, 0);
                ref_edgeArr.push(v13);
              }
            }
            ysatrt = pm_ymax(pm_xStart, pm_xStart - pm_xlen);
            yend = pm_ymin(pm_xStart, pm_xStart - pm_xlen);
            ref_edgeArr.push(new THREE.Vector3(pm_xStart - pm_xlen, ysatrt, 0));
            //结束的边界
            if (yend != ysatrt && ysatrt - yend - pm_height > 0) {
              ref_edgeArr.push(new THREE.Vector3(pm_xStart - pm_xlen, yend, 0));
              let YAxis = ysatrt - yend;
              let retYtime = mesh.userData.LinearInequality(
                YAxis - pm_height,
                pm_height
              );
              for (var zz = 0; zz < retYtime.time; zz++) {
                let newy =
                  ysatrt - pm_height - (pm_height + retYtime.offset) * zz;
                var v13 = new THREE.Vector3(pm_xStart - pm_xlen, newy, 0);
                ref_edgeArr.push(v13);
              }
            }
            ///中间的部分
            for (var ii = 0; ii < retXtime.time; ii++) {
              let newx = pm_xStart - pm_width - (pm_width + retXtime.offset) * ii;
              let ysatrt = pm_ymax(pm_xStart, newx);
              let yend = pm_ymin(pm_xStart, newx);
              let YAxis = ysatrt - yend; // (scaleY/scaleX)*Math.sqrt(P1.x*P1.x - newx*newx  );
              let retYtime = mesh.userData.LinearInequality(
                YAxis - pm_height,
                pm_height
              );
              ref_edgeArr.push(new THREE.Vector3(newx, ysatrt, 0));
              ref_edgeArr.push(new THREE.Vector3(newx, yend, 0));
              for (var zz = 0; zz < retYtime.time; zz++) {
                let newy =
                  ysatrt - pm_height - (pm_height + retYtime.offset) * zz;
                var v13 = new THREE.Vector3(newx, newy, 0);
  
                ref_Arr.push(v13);
              }
            }
            ref_edgeArr.forEach((item) => {
              ref_Arr.push(item);
            });
          };
  
          // this.mesh  =  mesh;
          shapex.getMyPoints = function (pm_width, pm_height, pm_rettype) {
            if (mesh.userData.scale) {
              ///如果没有放大直接返回原来的结果集，如果尺寸发生变化了，需要重构所有的数组
              if (
                mesh.userData.scale.x == mesh.scale.x &&
                mesh.userData.scale.y == mesh.scale.y &&
                mesh.userData.scale.z == mesh.scale.z
              ) {
                if (mesh.userData.allArr && mesh.userData.edgeArr) {
                  if (pm_rettype == "All") {
                    return mesh.userData.allArr;
                  } else {
                    return mesh.userData.edgeArr;
                  }
                }
              }
            }
            if (pm_rettype == null) {
              pm_rettype = "All";
            }
            let retArr = []; //包括边缘和内部
            let edgeArr = []; //只有边缘的数组
            pm_height = Number(pm_height);
            pm_width = Number(pm_width);
            let scaleX = mesh.scale.x;
            let scaleY = mesh.scale.y;
            mesh.userData.baseData.forEach((item) => {
              item.x = item.x * scaleX;
              item.y = item.y * scaleY;
            });
  
            let P1 = mesh.userData.baseData[0];
            let P2 = mesh.userData.baseData[1];
            let P3 = mesh.userData.baseData[2];
            let P4 = mesh.userData.baseData[3];
  
            switch (pm_myShareType) {
              case "Windmill":
                break;
              case "Leaf":
                break;
              case "Triangle":
                mesh.userData.computePoints(
                  P3.x,
                  P3.x * 2,
                  (pm_x_start, pm_newx) => {
                    if (pm_newx >= 0) {
                      return P1.y + ((P1.y - P3.y) * pm_newx) / (P1.x - P3.x);
                    } else {
                      return P1.y + ((P1.y - P2.y) * pm_newx) / (P1.x - P2.x);
                    }
                  },
                  (pm_x_start, pm_newx) => {
                    return P2.y;
                  },
                  pm_width,
                  pm_height,
                  retArr,
                  edgeArr
                );
  
                break;
              case "Rect":
                mesh.userData.computePoints(
                  P1.x,
                  P1.x - P2.x,
                  (pm_x_start, pm_newx) => {
                    return P1.x;
                  },
                  (pm_x_start, pm_newx) => {
                    return -1 * P1.x;
                  },
                  pm_width,
                  pm_height,
                  retArr,
                  edgeArr
                );
  
                break;
              case "CircularArc":
                break;
              case "Arc":
                //分为三种情况  整个圆   小于PI  大于PI<2*PI
                if (mesh.userData.radian == 2 * Math.PI) {
                  mesh.userData.computePoints(
                    P1.x,
                    P1.x * 2,
                    (pm_x_start, pm_newx) => {
                      return (
                        (scaleY / scaleX) *
                        Math.sqrt(pm_x_start * pm_x_start - pm_newx * pm_newx)
                      );
                    },
                    (pm_x_start, pm_newx) => {
                      return (
                        -1 *
                        (scaleY / scaleX) *
                        Math.sqrt(pm_x_start * pm_x_start - pm_newx * pm_newx)
                      );
                    },
                    pm_width,
                    pm_height,
                    retArr,
                    edgeArr
                  );
                  /*  let   retXtime  =   LinearInequality(P1.x*2, pm_width )
                                              for( var ii=0;ii<retXtime.time;ii++ )
                                              {
                                                  let newx = P1.x -pm_width/2 - (pm_width  + retXtime.offset)*ii;
                                                  let YAxis =  (scaleY/scaleX)*Math.sqrt(P1.x*P1.x - newx*newx  );
                                                  let   retYtime  =   LinearInequality(YAxis*2, pm_height );
                                                  for( var  zz=0;zz<retYtime.time;zz++  )
                                                  {
                                                      let newy = YAxis  - pm_height/2 - (pm_height  + retYtime.offset)*zz;
                                                      var v13 =  new THREE.Vector3(newx,newy,0);
                                                  // v13 =v13.normalize();
                                                      var matrix4 = new THREE.Matrix4().makeRotationFromEuler(mesh.rotation);
                                                      var matrix3 = new THREE.Matrix3().setFromMatrix4(matrix4);
                                                      v13.applyMatrix3(matrix3);
                                                      v13.add(mesh.position);
                                                      retArr.push( v13);
                                                  }
                                              } */
                } else if (mesh.userData.radian <= Math.PI) {
                  mesh.userData.computePoints(
                    P1.x,
                    P1.x,
  
                    (pm_x_start, pm_newx) => {
                      if (pm_newx <= P1.x && pm_newx > P2.x) {
                        //  pm_x_start  表示初始圆的半径   pm_newx 新的坐标点
                        return (
                          (scaleY / scaleX) *
                          Math.sqrt(pm_x_start * pm_x_start - pm_newx * pm_newx)
                        );
                      } else {
                        return (pm_newx * P3.y) / P3.x;
                      }
                    },
                    (pm_x_start, pm_newx) => {
                      if (pm_newx <= P1.x && pm_newx >= P2.x) {
                        return (
                          -1 *
                          (scaleY / scaleX) *
                          Math.sqrt(pm_x_start * pm_x_start - pm_newx * pm_newx)
                        );
                      } else {
                        return (pm_newx * P2.y) / P2.x;
                      }
                    },
                    pm_width,
                    pm_height,
                    retArr,
                    edgeArr
                  );
                  /* mesh.userData.computePoints(P2.x,P2.x,
                                          (pm_x_start,pm_newx)=>{
                                              return  ( pm_newx * (P3.y)/(P3.x)  )},
                                          (pm_x_start,pm_newx)=>
                                          { return   (pm_newx * (P2.y)/(P2.x) );
                                          },
                                          pm_width,pm_height,retArr);*/
                } //PI到2PI之间
                else {
                }
                break;
            }
  
            mesh.userData.edgeArr = edgeArr;
            mesh.userData.allArr = retArr;
            mesh.userData.scale = {
              x: mesh.scale.x,
              y: mesh.scale.y,
              z: mesh.scale.z,
            };
  
            if (pm_rettype == "All") {
              return retArr;
            } else {
              return edgeArr;
            }
          };
          var baseData = shapex[pm_myShareType](...argsArray);
          //var material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1});
          var geometry = new THREE.ShapeGeometry(shape);
          const material = new THREE.MeshBasicMaterial({
            color: 0x808080,
            side: THREE.DoubleSide,
          });
          let strflag  ="2d_";
          const mesh = new THREE.Mesh(geometry, material);
          mesh.userData.baseData = baseData;
          mesh.userData.getMyPoints = shapex.getMyPoints;
          mesh.userData.computePoints = shapex.computePoints;
          mesh.userData.LinearInequality = shape.LinearInequality;
          mesh.userData.radian = argsArray[0];
          mesh.name = "myShare_" + pm_myShareType + "_" + Date.now();
  
          //新添加的----
          mesh.userData.getBaseDivInfo    = shapex.getBaseDivInfo;
          mesh.userData.addparm1  = argsArray[1]; 
          mesh.userData.ShareType = pm_myShareType;
          mesh.userData.spid_yl  =  "20201140001";   //添加了spid_yl  
          mesh.userData.price  = 0;     
          mesh.userData.copyName  =strflag+ pm_myShareType+"_"+ Date.now();   //主要是联动的时候使用，循环复制的时候这个也会进行操作
          mesh.userData.r = R;
          mesh.castShadow = true;
          //----
  
          mesh.position.set(0, 0, 0);
          return mesh;
        },
      };
    },
    //监听加载的进度，用于进度条
    watch: {
      percentage(val) {
        if (val == 100) {
          this.modelLoading = false;
        }
      },
    },
    methods: {
      deleteShare: function () {
        console.log(this.MouseEventData.shareMesh, "删除");
        if (this.MouseEventData.shareMesh) {
          this.removeMesh(this.MouseEventData.shareMesh.name, true);
        }
        this.MouseEventData.shareMesh = null;
      },
      shareCopy: function () {},
      shareFill: function () {
        if (this.MouseEventData.shareMesh) {
          let retarr = this.MouseEventData.shareMesh.userData.getMyPoints(
            this.shareFillParm,
            this.shareFillParm
          );
          let sname = this.MouseEventData.shareMesh.name;
          let mesh = this.MouseEventData.shareMesh;
          retarr.forEach((item, index) => {
            let v13 = new THREE.Vector3().copy(item);
            let matrix4 = new THREE.Matrix4().makeRotationFromEuler(
              mesh.rotation
            );
            let matrix3 = new THREE.Matrix3().setFromMatrix4(matrix4);
            v13.applyMatrix3(matrix3);
            v13.add(mesh.position);
  
            var fillmesh = this.addSphere(
              v13.x,
              v13.y,
              v13.z,
              true,
              this.shareFillParm / 2,
              sname + index + "x3z",
              0x0000ff
            );
            fillmesh.userData.fillname = sname;
            this.mesh.push(fillmesh);
          });
        }
      },
      deleteShareFill: function () {
        if (this.MouseEventData.shareMesh) {
          for (var i = this.mesh.length - 1; i > 0; i--) {
            let sname = this.mesh[i].userData.fillname;
            if (sname) {
              if (sname == this.MouseEventData.shareMesh.name) {
                this.removeMesh(this.mesh[i].name, true);
              }
            }
          }
        }
      },
      shareYrotateSub: function () {
        if (this.MouseEventData.shareMesh) {
          this.MouseEventData.shareMesh.rotateZ(-0.02);
        }
      },
      shareYrotateAdd: function () {
        if (this.MouseEventData.shareMesh) {
          this.MouseEventData.shareMesh.rotateZ(0.02);
        }
      },
      shareScaleModify: function (pm_key, pm_offset) {
        if (this.MouseEventData.shareMesh) {
          this.MouseEventData.shareMesh.scale[pm_key] =
            this.MouseEventData.shareMesh.scale[pm_key] + pm_offset;
        }
      },
      shareZScaleAdd: function () {
        this.shareScaleModify("y", 0.01);
      },
      shareZScaleSub: function () {
        this.shareScaleModify("y", -0.01);
      },
      shareXScaleAdd: function () {
        this.shareScaleModify("x", +0.01);
      },
      shareXScaleSub: function () {
        this.shareScaleModify("x", -0.01);
      },
      addmyShare: function (pm_key, pm_1, pm_2, pm_3) {
        let mesh = this.myShare(pm_key, pm_1, pm_2, pm_3);
  
        mesh.rotation.x = Math.PI / 2;
        // mesh.position.set(0, 41, 0);
        // console.log(mesh);
        // this.mesh.push(mesh);
        if(this.scene){
           this.scene.add(mesh);
        }
        console.log(mesh, "添加");
        // this.fillModelArr.push(mesh);
        // this.MouseEventData.shareMesh = mesh;
        this.mesh2d.push(mesh);
        return mesh;
      },
  
      addmyarc: function () {
        this.addmyShare(this.myShareType.Arc, this.shareParm1 * Math.PI);
      },
      addmyarcLove() {},
      addmycircular: function () {
        this.addmyShare(
          this.myShareType.CircularArc,
          this.shareParm1 * Math.PI,
          this.shareParm2
        );
      },
      addmyrect: function () {
        this.addmyShare(this.myShareType.Rect);
      },
      addmytriangle: function () {
        this.addmyShare(this.myShareType.Triangle);
      },
      addmywind: function () {
        this.addmyShare(this.myShareType.Windmill);
      },
      addmyleaf: function () {
        this.addmyShare(this.myShareType.Leaf);
      },
      // 载入2d图形
      loadmesh:function(pm_name )
      {
          if(pm_name ==null)
          {
              pm_name ="mesh2d";
              this.mesh2d=[];//清空 避免重复放入2d数据
          }
          let  sevedata = sessionStorage.getItem(pm_name);
          if(sevedata)
          {
              sevedata  =  JSON.parse(sevedata);
              sevedata.forEach(( item)=>
              {
                let radianNum = Math.round(Number(item.radian) / Math.PI);
                let mesh =  this.addmyShare(item.ShareType, radianNum * Math.PI, Number(item.addparm1));  //创建基础图形
                mesh.scale.x  =  item.scale.x;   //设置放大比率
                mesh.scale.y  =  item.scale.y;   //设置放大比率
                mesh.rotation.x = Math.PI / 2;
                mesh.position.set( item.position.x, this.scint *1.9 ,-item.position.y);
                mesh.userData.copyName  =  item.copyName;
                // mesh.userData.itemsrc  =  item.itemsrc;         //新增
                if(item.spid_yl )
                {
                    mesh.userData.spid_yl  =  item.spid_yl;   
                }
                mesh.userData.price  =  item.price;   
                if(item.material)  
                {
                  
                  let textureLoader = new THREE.TextureLoader();
                  console.log('item.material:??????????????',textureLoader,item.material);
  
                        textureLoader.load(item.material, function(newTexture) 
                        {
                          console.log('newTexture:',newTexture)
                        // textureLoader.magFilter = THREE.NearestFilter; // 设置放大过滤为最邻近过滤
                        // textureLoader.minFilter = THREE.LinearMipMapLinearFilter; // 设置缩小过滤为MIP映射线性过滤
                          mesh.material.map = newTexture;
                        //  mesh.material.normalMap = newTexture;
                          mesh.userData.itemsrc   =  item.material;
                          mesh.needsUpdate = true;
                        })
                } 
              })
      
          }
     },
  
      //这两个可以做为obb的内置方法处理，暂时先如此写这吧
      createRayForStartEndVector: function (pm_start, pm_end) {
        let newend = new THREE.Vector3();
        newend.copy(pm_end);
        let maxlen = this.getPointLen(
          pm_start.x - pm_end.x,
          pm_start.y - pm_end.y,
          pm_start.z - pm_end.z
        );
        newend.sub(pm_start);
        var ray = new THREE.Raycaster(pm_start, newend.normalize(), 0, maxlen);
        return ray;
      },
      getMeshMyCustemVerticesVector: function (
        pm_key,
        pm_mesh,
        pm_newObb,
        pm_newPoint
      ) {
        let retv = new THREE.Vector3();
        retv.copy(pm_mesh.geometry.userData.myCustemVertices[pm_key]);
        retv.applyMatrix3(pm_newObb.rotation);
        retv = this.setVectorScale(retv, pm_mesh, pm_newPoint);
        return retv;
      },
      setVectorScale(pm_vector, pm_mesh, pm_position) {
        pm_vector.x = pm_mesh.scale.x * pm_vector.x;
        pm_vector.y = pm_mesh.scale.y * pm_vector.y;
        pm_vector.z = pm_mesh.scale.z * pm_vector.z;
        pm_vector.add(pm_position);
        return pm_vector;
      },
      getDecisionPointsRay: function (pm_mesh, pm_newObb, pm_newPoint) {
        let raycasterArr = [];
  
        let upCenter = this.getMeshMyCustemVerticesVector(
          "upCenter",
          pm_mesh,
          pm_newObb,
          pm_newPoint
        );
  
        var rayup = this.createRayForStartEndVector(upCenter, pm_newPoint);
        raycasterArr.push(rayup);
  
        let centerLittle = this.getMeshMyCustemVerticesVector(
          "centerLittle",
          pm_mesh,
          pm_newObb,
          pm_newPoint
        );
  
        var ray = this.createRayForStartEndVector(
          centerLittle,
          new THREE.Vector3(0, centerLittle.y, 0)
        );
  
        raycasterArr.push(ray);
        if (this.getUserSelect(pm_mesh.name, "direction")) {
          let keytArr = [
            "upBackLeft",
            "upBackRight",
            "upFrontLeft",
            "upFrontRight",
          ];
          let minvector = null;
          let minYval = 9999999999;
          keytArr.forEach((itemkey) => {
            let v1 = this.getMeshMyCustemVerticesVector(
              itemkey,
              pm_mesh,
              pm_newObb,
              pm_newPoint
            );
            if (v1.y < minYval) {
              minYval = v1.y;
              minvector = v1;
            }
          });
  
          var rayx = this.createRayForStartEndVector(pm_newPoint, minvector);
          raycasterArr.push(rayx);
        }
        return raycasterArr;
      },
      loadingGif() {
        const imgCount = 34;
        const delay = 100;
        const canvas = document.getElementById("canLading");
        const imgSrcs = [];
        const images = [];
        let count = 0;
        let ctx = null;
        let timeout = null;
        for (let i = 1; i <= imgCount; i += 1) {
          imgSrcs.push(`../assets/loading/light${i}.png`);
        }
        const animation = (i) => {
          ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.clearRect(0, 0, images[i].width, images[i].height);
          ctx.drawImage(images[i], 0, 0, images[i].width, images[i].height);
          if (i === imgSrcs.length - 1) {
            timeout = setTimeout(() => {
              animation(0);
            }, delay);
          } else {
            timeout = setTimeout(() => {
              animation(i + 1);
            }, delay);
          }
        };
        for (let i = 0; i < imgSrcs.length; i += 1) {
          images[i] = new Image();
          images[i].src = imgSrcs[i];
          images[i].onload = () => {
            count += 1;
            if (count === imgSrcs.length) {
              animation(0);
            }
          };
        }
      },
      checkIntersection(meshA, meshB) {
        const boxA = new THREE.Box3().setFromObject(meshA);
        const boxB = new THREE.Box3().setFromObject(meshB);
        // const obb = meshB.userData.obb;
        // const boxB = new THREE.Box3(
        //   new THREE.Vector3(
        //     obb.center.x - obb.halfSize.x,
        //     obb.center.y - obb.halfSize.y,
        //     obb.center.z - obb.halfSize.z
        //   ),
        //   new THREE.Vector3(
        //     obb.center.x + obb.halfSize.x,
        //     obb.center.y + obb.halfSize.y,
        //     obb.center.z + obb.halfSize.z
        //   )
        // );
  
        return boxA.intersectsBox(boxB);
      },
      // 检查所有模型是否相交
      checkAllIntersections(meshes) {
        if (meshes.length < 3) {
          return false;
        }
        const nonIntersections = [];
  
        const firstMesh = meshes[0];
        const otherMeshes = meshes.slice(2); // 获取第三个及之后的模型
  
        for (let i = 0; i < otherMeshes.length; i++) {
          if (!this.checkIntersection(firstMesh, otherMeshes[i])) {
            nonIntersections.push(otherMeshes[i]);
          }
        }
  
        return { nonIntersections };
      },
  
      //检查用户选择的某些项目是否满足最小数量要求
      checkMinModel() {
        for (let item of this.cakeSelect) {
          const id = item.selectId;
          const minvalue = item.minnum;
          if (minvalue || minvalue == 0) {
            const length = this.userSelect[id].length;
            if (length < Number(minvalue)) {
              return { name: item.Name, min: item.minnum };
            }
          }
        }
      },
  
      // 去结算按钮
      saveMoneybox() {
        //判断是否都达到最小摆放模型
        const min = this.checkMinModel();
        if (min) {
          this.showTextMessage(`${min.name}系列最少摆放${min.min}个`);
          return;
        }
  
        //判断模型有没有碰到蛋糕
        const meshes = this.mesh;
        // 获取所有不相交的模型
        const { nonIntersections } = this.checkAllIntersections(meshes);
        console.log("不相交的模型", nonIntersections);
        if (nonIntersections && nonIntersections.length > 0) {
          this.showTextMessage("所有摆件必须在蛋糕上！");
          return;
        }
  
        console.log(this.userSelect, "保存的数据");
        this.presentProcedure = 5;
        let little = [];
        for (let item in this.userSelect) {
          if (item == "cakebase" || item == "caKeUp") {
            this.settlementList.push(this.userSelect[item]);
          } else {
            little.push(...this.userSelect[item]);
          }
        }
        const allValue = little.concat(this.settlementList);
        this.allValue = allValue;
        console.log(allValue, "全部数据");
        if (little.length) {
          const result = little.reduce((acc, curr) => {
            const existingItem = acc.find((item) => item.id === curr.id);
            if (existingItem) {
              existingItem.sum += Number(curr.unm);
              existingItem.money += Number(curr.price);
            } else {
              acc.push({
                ...curr,
                sum: Number(curr.unm),
                money: Number(curr.price),
              });
            }
            return acc;
          }, []);
  
          this.settlementList.push(...result);
          console.log(result, "摆件");
        }
        for (let item of this.settlementList) {
          if (item.selectId == "cakebase" || item.selectId == "caKeUp") {
            item.sum = 1;
            item.money = item.price;
          } else {
            item.money = item.money.toFixed(2);
          }
        }
  
        console.log(this.settlementList, "结算清单数据");
  
        let total = 0;
        for (let item of this.settlementList) {
          if (item.money) {
            total += Number(item.money);
          }
        }
        //算总数
        this.totalPrice = (Number(total) + Number(this.basePrice)).toFixed(2);
  
        this.closePreview();
        setTimeout(() => {
          this.presentProcedure = 5;
        }, 800);
      },
      //重置
      toCakeOne() {
        window.location.reload();
      },
      toPayall() {
        //设置步骤
        this.presentProcedure = 4;
        // this.Preview();
      },
      //返回上一步
      changeUpCake() {
        this.presentProcedure = 2;
        this.settlementList = [];
        // this.closePreview();
      },
      closePop() {
        this.showPopupDiv = false;
        this.showPopGifl = false;
      },
      hidePopUp() {
        this.showPopupDiv = true;
        cancelAnimationFrame(this.animationFrameId);
      },
      // 优惠券活动飘过展示
      startMoving() {
        this.popupPosition = -50;
        this.showPopGifl = true;
        this.animate();
      },
      animate() {
        if (this.popupPosition >= -50 && this.popupPosition < 100) {
          this.popupPosition = this.popupPosition + 0.5; // 调整速度
          this.animationFrameId = requestAnimationFrame(this.animate); // 确保传递的是函数
        } else {
          this.isMoving = false;
          cancelAnimationFrame(this.animationFrameId);
        }
      },
      //传值并跳转微信小程序
      //付款按钮
      giveValueToWx() {
        const values = this.allValue;
        for (let item of values) {
          const id = item.selectId;
          const value = this.cakeSelect.filter((item) => item.selectId == id);
          item.idName = value[0].Name;
        }
        const towxValue = {
          spid: this.allCakeid,
          pirce: this.basePrice,
          znet: this.totalPrice,
          datalist: values,
          draw2D: [],
        };
  
        console.log(towxValue, "传给wx的值");
        wx.miniProgram.postMessage({ data: JSON.stringify(towxValue) });
        wx.miniProgram.navigateBack();
      },
      quit() {
        //后退
        wx.miniProgram.navigateBack();
      },
      clickMiddio() {},
      toPendulum(e) {
        this.showtoPendulum = e;
      },
  
      changeNext(e, type) {
        // 跳到第二步
        if (type == "oneNext") {
          // this.showElement = true;
          this.presentProcedure = e;
          const size = this.cakeSizeList[this.curCakeSizeChose].size;
          let oneSize =8;
          this.scint = oneSize * size;
          // debugger;
          for (let item of this.cakeSelect) {
            if (item.selectId == "cakebase" || item.selectId == "caKeUp") {
              console.log(item, "基础模型");
              this.addBaseMesh(
                item.curItem.id,
                item.selectId,
                item.curItem.id,
                item.curItem.desc,
                JSON.stringify(item.curItem)
              );
            }
          }
          this.activeNames = 2;
        } else if (type == "twoNext") {
          if (!this.userSelect.cakebase.id) {
            this.myMessageBox(this.myMessageRage.skinkey);
            return;
          }
          if (!this.userSelect.caKeUp.id) {
            this.myMessageBox(this.myMessageRage.skinkey2);
            return;
          }
          this.activeNames = 2;
          this.presentProcedure = e;
          this.showElement = false;
        } else if (type == "one") {
          this.presentProcedure = e;
          this.activeNames = 0;
        }
      },
      changeCakeSize(index) {
        this.curCakeSizeChose = index;
      },
      toShowElement() {
        this.showElement = !this.showElement;
      },
      closePops() {
        this.showPopList = false;
      },
      changeGlable(e) {
        this.showGlobalValue = e;
      },
      toShowAlign() {
        this.showAlignBox = true;
      },
      changeAlignShow() {
        this.showAlignBox = false;
      },
      openDetail(item, index) {
        this.activeNames = index;
        this.activeItems = item;
      },
      close_Upin: function () {
        if (this.MouseEventData.selectName) {
          const meshp = this.scene.getObjectByName(
            this.MouseEventData.selectName
          )?.position;
          var newx, newz;
          if (meshp.x != 0) {
            newx =
              Math.abs(meshp.x) +
              190 / Math.sqrt(1 + (meshp.z * meshp.z) / (meshp.x * meshp.x));
            newx = newx * (meshp.x / Math.abs(meshp.x));
            newz = (newx * meshp.z) / meshp.x;
          } else {
            newx = 0;
            newz = meshp.z + 190;
          }
          this.setControl(false);
          const movetoMesh = new TWEEN.Tween(this.camera.position)
            .to({ x: newx, y: meshp.y + 20, z: newz }, 1500)
            .onStart(() => {
              this.camera.lookAt(meshp.x, meshp.y, meshp.z);
  
              this.close_UpinMode = true;
            });
          this.featureIsShow = true;
          movetoMesh.start();
        }
      },
      close_UpOut: function () {
        if (this.close_UpinMode) {
          const movetoMesh = new TWEEN.Tween(this.camera.position)
            .to({ x: this.cpoint.x, y: this.cpoint.y, z: this.cpoint.z }, 1000)
            .onStart(() => {
              this.camera.lookAt(0, 0, 0);
            })
            .onComplete(() => {
              this.setControl(true);
              this.close_UpinMode = false;
            });
          this.featureIsShow = false;
          movetoMesh.start();
        }
      },
      collisionDetection: function (
        pm_mesh,
        pm_newPoint,
        pm_newAngle //进行碰撞检测，
      ) {
        const p = pm_newPoint;
        const boxhelpr = this.scene.getObjectByName(pm_mesh.name + this.boxflag);
        let obb = new OBB();
        obb.copy(pm_mesh.userData.obb);
  
        if (boxhelpr) {
          const size = new THREE.Vector3();
          var matrix = new THREE.Matrix4();
          matrix.elements[12] = p.x - obb.center.x;
          matrix.elements[13] = p.y - obb.center.y;
          matrix.elements[14] = p.z - obb.center.z;
          matrix.elements[15] = 1;
          if (pm_newAngle) {
            let newRotate = Number(pm_newAngle.rotate) * this.rockerRate;
            matrix["makeRotation" + pm_newAngle.axis.toUpperCase()](newRotate);
          }
          obb.applyMatrix4(matrix);
          let parr = this.getDecisionPointsRay(pm_mesh, obb, p);
          for (var i = 0; i < this.mesh.length; i++) {
            if (this.mesh[i].name == pm_mesh.name) {
              continue;
            }
            if (!this.crossMainMesh(this.mesh[i].name)) {
              for (var z = 0; z < parr?.length; z++) {
                var ray = parr[z];
                const intersects = ray.intersectObjects([this.mesh[i]]);
                ray = null;
                if (intersects.length > 0) {
                  if (obb.containsPoint(intersects[0].point)) {
                    // boxhelpr.box.containsPoint(intersects[0].point)
                    if (z == 0) {
                      //判断上下碰撞
                      if (
                        this.Round(intersects[0].point.y, 3) > this.Round(p.y, 3)
                      ) {
                        this.myMessageBox(this.myMessageRage.nomovekey, p);
                        return false;
                      }
                    } else {
                      //旋转或者平移
                      this.myMessageBox(this.myMessageRage.nomovekey, p);
                      return false;
                    }
                  }
                }
              }
  
              continue;
            }
  
            const endPonitBox = this.scene.getObjectByName(this.mesh[i].name);
            if (this.mesh[i].name.indexOf(this.ShareFlag >= 0)) {
              continue;
            }
            const yngo = obb.intersectsOBB(endPonitBox.userData.obb);
  
            if (yngo) {
              this.myMessageBox(this.myMessageRage.notransmitkey, p);
              return false;
            }
          }
          parr = null;
        }
        return true;
      },
  
      transmit: function () {
        console.log("selectid", this.dropSelect.id);
        if (!this.dropSelect.id) {
          this.myMessageBox(this.myMessageRage.tipsValue);
          return;
        }
  
        if (this.Rocker.utype == this.Rocker.utypeRange.ShootingMode) {
          const p = new THREE.Vector3();
          if (this.poiaimingPointnt.endPoint) {
            p.copy(this.poiaimingPointnt.endPoint);
            const vector1 = new THREE.Vector3(p.x, p.y + 1200, p.z);
            let Bullets;
            if (
              this.PreviousCache.mesh &&
              this.PreviousCache.id == this.dropSelect.id
            ) {
              Bullets = this.addcloneMesh(this.PreviousCache, vector1);
              if (Bullets == null) {
                return;
              }
            } else {
              if (this.dropSelect.id == null) {
                return;
              }
              Bullets = this.addMesh(
                this.dropSelect.id,
                vector1,
                this.dropSelect.selectId,
                this.dropSelect.desc
              );
              this.PreviousCache.id = this.dropSelect.id;
            }
            this.showbox3(Bullets.name, false);
            p.add(new THREE.Vector3(0, Bullets.userData.obb.halfSize.y / 10, 0));
  
            //const  boxhelpr  = this.scene.getObjectByName(Bullets.name + this.boxflag);
            if (!this.collisionDetection(Bullets, p)) {
              this.removeMesh(Bullets.name);
              return;
            }
  
            const valueidItem = this.getItemByid(
              this.dropSelect.selectId,
              this.dropSelect.id
            );
            // //获取已增加模型 统一删除用。
            this.getlaidModelList(valueidItem);
  
            this.setNextModelShow(valueidItem, Bullets.rotation);
            this.PreviousCache.mesh = Bullets;
            const BulletsFly = new TWEEN.Tween(Bullets.position)
              .to({ x: p.x, y: p.y, z: p.z }, 1000)
              .onComplete(() => {
                this.updateMeshBox(Bullets);
              })
              .onUpdate((newp) => {});
            BulletsFly.easing(TWEEN.Easing.Quadratic.In);
            BulletsFly.start();
  
            this.$nextTick(() => {
              let x = p.x;
              let y = p.y;
              let z = p.z;
  
              // 计算圆的半径R
              let R = Math.sqrt(x * x + z * z);
              console.log(R, "半径");
  
              // 计算初始点的极坐标角度
              let theta = Math.atan2(z, x);
  
              // 计算下一个点的极坐标角度
              let theta_new = theta + 10 / R;
  
              // 计算下一个点的直角坐标
              let x_new = R * Math.cos(theta_new);
              let z_new = R * Math.sin(theta_new);
              let y_new = y; // Y轴不变
  
              console.log("下一个点的位置：", x_new, y_new, z_new);
  
              this.poiaimingPointnt.endPoint.x = x_new;
              this.poiaimingPointnt.endPoint.z = z_new;
            });
  
            this.toNextPlace(Bullets);
          }
        }
      },
  
      toNextPlace(e) {
        const newphereP = this.poiaimingPointnt.endPoint;
        console.log(newphereP, "点坐标", e);
  
        // 模型宽度和高度
        const obb = e.userData.obb.halfSize;
        const modelWidth = obb.x * 2;
        const modelHeight = obb.y * 2;
        let x = newphereP.x;
        let y = newphereP.y;
        let z = newphereP.z;
  
        // 计算圆的半径R
        let R = Math.sqrt(x * x + z * z);
        console.log(R, "半径");
  
        // 计算初始点的极坐标角度
        let theta = Math.atan2(z, x);
  
        // 根据物体的宽度和高度调整角度增量
        let angleIncrement =
          Math.sqrt(modelWidth * modelWidth + modelHeight * modelHeight) /
          (2 * R);
        let theta_new = theta + angleIncrement;
  
        // 计算下一个点的直角坐标
        let x_new = R * Math.cos(theta_new);
        let z_new = R * Math.sin(theta_new);
        let y_new = y; // Y轴不变
  
        console.log("下一个点的位置：", x_new, y_new, z_new);
  
        // 更新点的位置
        this.poiaimingPointnt.endPoint.x = x_new;
        this.poiaimingPointnt.endPoint.z = z_new;
      },
      getItemByid(allid, id) {
        const allList = this.cakeSelect.filter((item) => item.selectId == allid);
        const item = allList[0].selectList.filter((item) => item.id == id);
        return item[0];
      },
      setNextModelShow(item, position) {
        if (!this.dropSelect.id && !this.PreviousCache.mesh) {
          return;
        }
        const x = position._x;
        const z = position._z;
        const degressX = this.radiansToDegrees(x).toFixed(2);
        const degressZ = this.radiansToDegrees(z).toFixed(2);
  
        this.curNextModel.degressX = degressX;
        this.curNextModel.degressZ = degressZ;
        this.curNextModel.img = item.img;
      },
      radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
      },
      buttonRotateStart: function (e) {
        const a = e.currentTarget.dataset.rtype;
        const r = e.currentTarget.dataset.rval;
        this.Rocker.buttonRotateData = { axis: a, rotate: r };
      },
      buttonRotateStop: function () {
        this.Rocker.buttonRotateData = null;
      },
      RockerMeshDownStart: function () {
        this.Rocker.yDownDirection = true;
      },
      RockerMeshDownStop: function () {
        this.Rocker.yDownDirection = false;
      },
      RockerMeshUpStart: function () {
        this.Rocker.yUpDirection = true;
      },
      RockerMeshUpStop: function () {
        this.Rocker.yUpDirection = false;
      },
      initPoiaimingPointnt: function () //初始化这个点撒
      {
        if (this.poiaimingPointnt == null) {
          this.poiaimingPointnt = { x: 0, y: 0 };
        }
        this.poiaimingPointnt.x = this.cameraInit.width / 2;
        this.poiaimingPointnt.y = this.cameraInit.height / 2;
      },
      RockerNextOtype: function (e) {
        const newtype = this.Rocker.nextOtype();
        if (newtype == this.Rocker.utypeRange.SingleMove) {
          //非射击模式的时候 重置这个点
          // this.initPoiaimingPointnt();
          this.addSphere(0, 0, 0, false);
        }
      },
      addCircleGeometry: function (x, y) {
        var vectorEnd = new THREE.Vector3(0, 0, 0); //this.coorDinateTransform(600,600,0);
  
        let p1 = this.mySharePoint(0, 0, 0, 0, 100);
        let p2 = this.mySharePoint(0, 0, 0, Math.PI / 2, 100);
        let p3 = this.mySharePoint(0, -100, Math.PI / 2, Math.PI, 100);
        let p4 = this.mySharePoint(100, 0, Math.PI, (Math.PI * 3) / 2, 100);
        let p5 = this.mySharePoint(0, 100, (Math.PI * 3) / 2, 2 * Math.PI, 100);
  
        let myShare1 = this.myShare(vectorEnd, [p2, p3], this.scene);
        //myShare1.position.set(100,100,0);
        myShare1.rotateX(-Math.PI / 2);
        myShare1.scale.x = 2;
        myShare1.scale.y = 2;
      },
      RockerDown: function (e) {
        console.log("手指按下");
        this.Rocker.yndwon = true;
      },
      RockerUp: function (e) {
        console.log("手指抬起");
        this.Rocker.reset();
        this.Rocker.yndwon = false;
      },
      RockerMove: function (e) {
        // const mesharr = this.mesh.filter((item) => {
        //   return this.crossMainMesh(item.name);
        // });
        // if (!mesharr.length && this.Rocker.utype !== "ShootingMode") {
        //   this.myMessageBox(this.myMessageRage.tipsValue);
        //   return;
        // }
        console.log(e, "手指移动参数");
        this.Rocker.getRockeAngle(e);
      },
  
      //保存按钮
      saveAllData() {
        alert("保存成功");
        wx.miniProgram.postMessage({
          data: JSON.stringify({
            isSaveDate: true,
            userSelect: this.userSelect,
            id: this.allCakeid,
          }),
        });
        console.log("保存数据到本地");
        wx.miniProgram.navigateBack();
      },
      deleteAllData() {
        alert("删除成功");
        sessionStorage.removeItem("saveAllData");
      },
      modeSelect: function (
        e //在移动的时候调用id同名的方法
      ) {
        //原来使用id  现在切换为 typeid;
        const eid = e.currentTarget.dataset.typeid;
        this.MouseEventData.opType = eid;
        console.log("新的模式" + eid);
      },
      setControl: function (
        pm_enabled //
      ) {
        this.control.enableRotate = pm_enabled;
        this.control.enableZoom = pm_enabled;
        // this.control.enablePan = pm_enabled;
      },
      //div选择时候的事件
      baseDivClick: function ( e  ) {
        const stype = e.currentTarget.dataset.stype;
        const eid = e.currentTarget.id;
        const desc = e.currentTarget.dataset.desc; //文字不提交，免得占用数据带宽
        const item = e.currentTarget.dataset.item;
        const index = e.currentTarget.dataset.index;
        this.curSelectItemId = eid;
        switch (stype) {
          case this.cakeParmName.cakebase:
          case this.cakeParmName.caKeUp:
            this.cakeSelect[this.activeNames].curSelectIndex = index;
            this.cakeSelect[this.activeNames].curItem = JSON.parse(item);
            // this.addBaseMesh(eid, stype, eid, desc, JSON.stringify(item));
            break;
          default:
            // this.setControl(false);
            this.dropSelect.id = eid;
            this.dropSelect.selectId = stype;
            this.dropSelect.desc = desc;
            this.showElement = false;
            this.PreviousCache.mesh = null;
            if (eid !== this.PreviousCache.id) {
              const valueidItem = this.getItemByid(
                this.dropSelect.selectId,
                this.dropSelect.id
              );
              this.curNextModel.img = valueidItem.img;
              this.curNextModel.degressX = 0;
              this.curNextModel.degressZ = 0;
            }
            break;
        }
      },
      Round: function (
        pm_value,
        pm_num //保留小数
      ) {
        let numBer = pm_value;
        numBer = numBer.toFixed(pm_num);
        return Number(numBer);
      },
      rotateMesh: function (x, y) {
        if (this.MouseEventData.mesh) {
          const retx = this.MouseEventData.getRotate(x, y);
          // console.log(retx);
          //this.setZero(this.MouseEventData.mesh);
          if (retx.axle == "Z") {
            this.MouseEventData.mesh.rotateZ(retx.rotate);
          } else {
            this.MouseEventData.mesh.rotateX(retx.rotate);
          }
          // console.log("再次归零坐标", this.MouseEventData.mesh.position);
        }
      },
      moveMesh: function (x, y) {
        if (this.MouseEventData.mesh) {
          var oldx = this.MouseEventData.downPoint.x;
          var oldy = this.MouseEventData.downPoint.y;
          var vector1 = this.coorDinateTransform(x, y, 0);
          var vector2 = this.coorDinateTransform(oldx, oldy, 0);
          vector1.sub(vector2);
          // this.setZero(this.MouseEventData.mesh);
          // this.MouseEventData.mesh.position.add(this.MouseEventData.oldP);
          this.MouseEventData.mesh.position.add(vector1);
          this.MouseEventData.downPoint.x = x;
          this.MouseEventData.downPoint.y = y;
        }
      },
      mouseDrawLineMove: function (x, y) {
        // console.log(this.MouseEventData.selectName);
        if (this.MouseEventData.selectName) {
          var vectorEnd = this.coorDinateTransform(x, y, 0);
          var vectorStart = this.scene.getObjectByName(
            this.MouseEventData.selectName
          ).position;
          var points = [];
          points.push(vectorStart);
          points.push(vectorEnd);
          this.moveLine.geometry.setFromPoints(points);
          this.moveLine.visible = true;
        }
      },
      myMouseMove: function (e) {
        if (this.MouseEventData.opType) {
          var x = 0,
            y = 0;
          x = e.touches[0].clientX - e.touches[0].target.offsetParent.offsetLeft;
          y = e.touches[0].clientY - e.touches[0].target.offsetParent.offsetTop;
          var type = this.MouseEventData.opType;
          this[type](x, y); //上面的两个 一个是移动一个是旋转
          // this.MouseEventData.mesh.position.set(oldx,oldy,oldz);
          if (this.MouseEventData.mesh) {
            this.updateMeshBox(this.MouseEventData.mesh);
          }
        }
      },
  
      updateMeshBox: function (pm_mesh) {
        this.setObbBox3(pm_mesh);
        this.showbox3(pm_mesh.name, true);
      },
      setObbBox3: function (pm_mesh) {
        let box3 = null;
        let halfSize;
        if (!pm_mesh.userData.obb) {
          const geometryLine = new THREE.BufferGeometry();
          const vertices = new Float32Array([0, 0, 1, 0, 0, 0]);
  
          // 创建最小包围盒的线条
          geometryLine.setAttribute(
            "position",
            new THREE.BufferAttribute(vertices, 3)
          );
          const materialLine = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 3,
          });
          box3 = new THREE.LineSegments(geometryLine, materialLine);
          box3.name = pm_mesh.name + this.boxflag;
          pm_mesh.userData.newbox3 = box3;
          this.scene.add(box3);
  
          //最小包围盒的对象
          pm_mesh.userData.obb = new OBB();
          pm_mesh.geometry.userData.obb = new OBB();
  
          var min = pm_mesh.geometry.boundingBox.min;
          var max = pm_mesh.geometry.boundingBox.max;
          max.sub(min).multiplyScalar(0.5);
          halfSize = pm_mesh.geometry.userData.obb.halfSize.copy(max);
  
          pm_mesh.geometry.userData.myCustemVertices = {
            centerLittle: new THREE.Vector3(0, halfSize.y / 15, 0),
            upCenter: new THREE.Vector3(0, halfSize.y * 0.95, 0),
            downCenter: new THREE.Vector3(0, -halfSize.y, 0),
            leftCenter: new THREE.Vector3(-halfSize.x, 0, 0),
            rightCenter: new THREE.Vector3(halfSize.x, 0, 0),
            frontCenter: new THREE.Vector3(0, 0, halfSize.z),
            backCenter: new THREE.Vector3(0, 0, -halfSize.z),
            upFrontLeft: new THREE.Vector3(-halfSize.x, halfSize.y, halfSize.z),
            upFrontRight: new THREE.Vector3(halfSize.x, halfSize.y, halfSize.z),
            downFrontRight: new THREE.Vector3(
              halfSize.x,
              -halfSize.y,
              halfSize.z
            ),
            downFrontLeft: new THREE.Vector3(
              -halfSize.x,
              -halfSize.y,
              halfSize.z
            ),
            upBackLeft: new THREE.Vector3(-halfSize.x, halfSize.y, -halfSize.z),
            upBackRight: new THREE.Vector3(halfSize.x, halfSize.y, -halfSize.z),
            downBackRight: new THREE.Vector3(
              halfSize.x,
              -halfSize.y,
              -halfSize.z
            ),
            downBackLeft: new THREE.Vector3(
              -halfSize.x,
              -halfSize.y,
              -halfSize.z
            ),
          };
          pm_mesh.userData.obb.center.set(
            pm_mesh.position.x,
            pm_mesh.position.y,
            pm_mesh.position.z
          );
          pm_mesh.userData.obb.halfSize.x = halfSize.x * pm_mesh.scale.x;
          pm_mesh.userData.obb.halfSize.y = halfSize.y * pm_mesh.scale.y;
          pm_mesh.userData.obb.halfSize.z = halfSize.z * pm_mesh.scale.z;
        } else {
          box3 = pm_mesh.userData.newbox3;
          pm_mesh.userData.obb.copy(pm_mesh.geometry.userData.obb);
          pm_mesh.userData.obb.applyMatrix4(pm_mesh.matrixWorld);
        }
  
        let newmin = null;
        let newmax = null;
        let arr = {};
        let vertices = pm_mesh.geometry.userData.myCustemVertices;
  
        for (var index in vertices) {
          let vx = new THREE.Vector3().copy(vertices[index]);
          vx.applyMatrix3(pm_mesh.userData.obb.rotation);
          vx = this.setVectorScale(vx, pm_mesh, pm_mesh.position);
          arr[index] = vx;
        }
        let lineArr = [];
        lineArr.push(arr.upFrontLeft);
        lineArr.push(arr.upFrontRight);
        lineArr.push(arr.upFrontLeft);
        lineArr.push(arr.downFrontLeft);
        lineArr.push(arr.upFrontLeft);
        lineArr.push(arr.upBackLeft);
  
        lineArr.push(arr.upFrontRight);
        lineArr.push(arr.downFrontRight);
        lineArr.push(arr.upFrontRight);
        lineArr.push(arr.upBackRight);
  
        lineArr.push(arr.upBackLeft);
        lineArr.push(arr.upBackRight);
        lineArr.push(arr.upBackLeft);
        lineArr.push(arr.downBackLeft);
  
        lineArr.push(arr.downBackRight);
        lineArr.push(arr.upBackRight);
        lineArr.push(arr.downBackRight);
        lineArr.push(arr.downFrontRight);
        lineArr.push(arr.downBackRight);
        lineArr.push(arr.downBackLeft);
  
        lineArr.push(arr.downFrontRight);
        lineArr.push(arr.downFrontLeft);
        lineArr.push(arr.downFrontRight);
        lineArr.push(arr.downBackRight);
        lineArr.push(arr.downFrontLeft);
        lineArr.push(arr.downBackLeft);
  
        box3.geometry.setFromPoints(lineArr);
        pm_mesh.userData.myCustemVertices = arr;
      },
      getRaycasterScale: function (
        pm_offsetx,
        pm_offsety //摄取射线的内容
      ) {
        const retx = (pm_offsetx / this.cameraInit.width) * 2 - 1;
        const rety = -(pm_offsety / this.cameraInit.height) * 2 + 1;
        return { x: retx, y: rety };
      },
      raycasterGetMesh: function (
        pm_x,
        pm_y,
        pm_mesharr //使用射线进行碰撞
      ) {
        const retScale = this.getRaycasterScale(pm_x, pm_y);
        var threeX = retScale.x;
        var threeY = retScale.y;
        if (this.raycaster == null) {
          this.raycaster = new THREE.Raycaster();
        }
        this.raycaster.setFromCamera(
          new THREE.Vector2(threeX, threeY),
          this.camera
        );
        return this.raycaster.intersectObjects(pm_mesharr);
      },
      crossMainMesh: function (
        pm_name //跳过基础的模型
      ) {
        if (
          this.userSelect.cakebase.name == pm_name ||
          this.userSelect.caKeUp.name == pm_name
        ) {
          return false;
        } else {
          return true;
        }
      },
      buttonNextMesh: function (
        pm_offsetIndex //手柄上添加 上一个或者下一个的方法
      ) {
        var findmesh = null;
        const mesharr = this.mesh.filter((item) => {
          return this.crossMainMesh(item.name);
        });
        if (mesharr.length == 0) {
          return;
        }
        if (this.MouseEventData.selectName == null) {
          findmesh = mesharr[0];
        } else {
          const mesh = this.scene.getObjectByName(this.MouseEventData.selectName);
          var index = mesharr.indexOf(mesh);
          if (index + pm_offsetIndex > mesharr.length - 1) {
            findmesh = mesharr[0];
          } else if (index + pm_offsetIndex < 0) {
            findmesh = mesharr[mesharr.length - 1];
          } else {
            findmesh = mesharr[index + pm_offsetIndex];
          }
        }
        if (findmesh) {
          if (this.MouseEventData.selectName) {
            this.showbox3(this.MouseEventData.selectName, false);
          }
          this.MouseEventData.mesh = findmesh;
          this.MouseEventData.selectName = findmesh.name;
          this.showbox3(this.MouseEventData.selectName, true);
          if (this.close_UpinMode) {
            this.close_Upin();
          }
        }
      },
      mouseSelectMesh: function (
        e //点击选择模型
      ) {
        if (this.ynPreview) {
          return;
        }
        this.MouseEventData.downPoint.x = e.offsetX;
        this.MouseEventData.downPoint.y = e.offsetY;
        var intersects = this.raycasterGetMesh(e.offsetX, e.offsetY, this.mesh);
        if (intersects.length > 0) {
          if (!this.crossMainMesh(intersects[0].object.name)) {
            return;
          }
          /*  if(this.userSelect.cakebase.name == intersects[0].object.name || this.userSelect.caKeUp.name == intersects[0].object.name)
                      {
                          return;
                      } */
          if (this.MouseEventData.selectName) {
            this.showbox3(this.MouseEventData.selectName, false);
          }
          // 选中模型的第一个模型
          this.MouseEventData.mesh = intersects[0].object;
          console.log(this.MouseEventData.mesh);
          let sname = this.MouseEventData.mesh.name;
          if (sname.indexOf(this.ShareFlag) != 0) {
            this.MouseEventData.selectName = this.MouseEventData.mesh.name;
            this.setControl(false);
            //归零
            var oldP = new THREE.Vector3();
            oldP.copy(this.MouseEventData.mesh.position);
            var oldPzero = new THREE.Vector3();
            oldPzero.copy(this.MouseEventData.mesh.position); //记录点击时刻的原点，用于移动,暂时没有效果
            this.MouseEventData.oldPzero = oldPzero;
            // console.log("原来的坐标",oldP);
            this.setZero(this.MouseEventData.mesh);
            //记录差异点，旋转后复位
            oldP.sub(this.MouseEventData.mesh.position);
            //  console.log("归零坐标",this.MouseEventData.mesh.position,"差异坐标",oldP);
            this.MouseEventData.oldP = oldP;
            this.showbox3(this.MouseEventData.selectName, true);
          } else {
            this.MouseEventData.shareMesh = this.MouseEventData.mesh;
          }
        } else {
          this.MouseEventData.mesh = null;
          console.log("啥也没有");
        }
      },
      clickEndMove: function () //鼠标其他按键停止移动
      {
        this.showbox3(this.MouseEventData.selectName, false);
        if (this.moveLine) {
          this.moveLine.visible = false;
        }
        this.MouseEventData.selectName = null;
        this.MouseEventData.opType = null;
        this.reset();
      },
      createAnimateUserSelect: function (
        pm_arr,
        pm_time,
        pm_offset,
        ref_animateArr
      ) {
        pm_arr.forEach((item) => {
          const omesh = this.scene.getObjectByName(item.name);
          item.oldPoint = {
            x: omesh.position.x,
            y: omesh.position.y,
            z: omesh.position.z,
          };
          const newXz = this.getZvalueFromX(
            omesh.position.x,
            omesh.position.z,
            pm_offset
          );
          const moveAnimate = new TWEEN.Tween(omesh.position)
            .to({ x: newXz.x, y: omesh.position.y, z: newXz.z }, pm_time)
            .onComplete(() => {
              this.add2dObject(
                item.name,
                newXz.x < 0 ? "downleft" : "downright",
                true
              );
            });
          ref_animateArr.push(moveAnimate);
        });
      },
      createAnimateNoPreview: function (pm_arr, pm_time, ref_animateArr) {
        pm_arr.forEach((item) => {
          const omesh = this.scene.getObjectByName(item.name);
          const moveAnimate = new TWEEN.Tween(omesh.position).to(
            { x: item.oldPoint.x, y: item.oldPoint.y, z: item.oldPoint.z },
            pm_time
          );
          ref_animateArr.push(moveAnimate);
        });
      },
      closePreview: function () {
        if (!this.ynPreview) {
          return;
        }
        this.ynPreview = false;
        const TweenObject = {
          cameraTime: 1500,
          cameraToZ: 300,
          cakeupY: 200,
          cakeupYr: 2 * Math.PI,
          cakeupTime: 1500,
          cakeoffset: 2.5,
        };
        const upmesh = this.scene.getObjectByName(this.userSelect.caKeUp.name);
        const caKeUpMove = new TWEEN.Tween(upmesh.position).to(
          {
            x: this.userSelect.caKeUp.oldPoint.x,
            y: this.userSelect.caKeUp.oldPoint.y,
            z: this.userSelect.caKeUp.oldPoint.z,
          },
          TweenObject.cakeupTime
        );
        var cakeMove = [];
  
        this.createAnimateNoPreview(
          this.userSelect.caKe01,
          TweenObject.cakeupTime,
          cakeMove
        );
  
        this.createAnimateNoPreview(
          this.userSelect.caKe02,
          TweenObject.cakeupTime,
          cakeMove
        );
        this.createAnimateNoPreview(
          this.userSelect.caKe03,
          TweenObject.cakeupTime,
          cakeMove
        );
  
        this.allshowObjctDesc(false);
  
        const cameraMove = new TWEEN.Tween(this.camera.position)
          .to(
            {
              x: this.cpoint.x,
              y: this.cpoint.y,
              z: this.cpoint.z + TweenObject.cameraToZ,
            },
            TweenObject.cakeupTime
          )
          .onComplete(() => {
            caKeUpMove.start();
            cakeMove.forEach((item) => {
              item.start();
            });
          })
          .onStop(() => {});
        cameraMove.start();
      },
      Preview: function () {
        if (this.ynPreview) {
          return;
        }
        this.EachRotateY = 0;
        this.addSphere(0, 0, 0, false);
        this.clickEndMove();
  
        //此变量表述动画的方案,适当调整这个结构就好
        const TweenObject = {
          cameraTime: 1500,
          cameraToZ: 300,
          cakeupY: 200,
          cakeupYr: 2 * Math.PI,
          cakeupTime: 1500,
          cakeoffset: 2.5,
        };
        const upmesh = this.scene.getObjectByName(this.userSelect.caKeUp.name);
        const basemesh = this.scene.getObjectByName(
          this.userSelect.cakebase.name
        );
        if (!upmesh) {
          this.myMessageBox(this.myMessageRage.skinkey);
          return;
        }
        if (!basemesh) {
          this.myMessageBox(this.myMessageRage.skinkey2);
          return;
        }
  
        this.userSelect.caKeUp.oldPoint = {
          x: upmesh.position.x,
          y: upmesh.position.y,
          z: upmesh.position.z,
        }; //记录旧的点,用于恢复原位
        const caKeUpMove = new TWEEN.Tween(upmesh.position)
          .to(
            {
              x: upmesh.position.x,
              y: upmesh.position.y + TweenObject.cakeupY,
              z: upmesh.position.z,
            },
            TweenObject.cakeupTime
          )
          .onComplete(() => {
            this.add2dObject(basemesh.name, "downright", true);
            this.add2dObject(upmesh.name, "downright", true);
          });
        const caKeUpYrate = new TWEEN.Tween(upmesh.rotation).to(
          { x: 0, y: upmesh.position.y + TweenObject.cakeupYr, z: 0 },
          TweenObject.cakeupTime
        );
        var cakeMove = [];
  
        this.createAnimateUserSelect(
          this.userSelect.caKe01,
          TweenObject.cakeupTime,
          TweenObject.cakeoffset,
          cakeMove
        );
  
        this.createAnimateUserSelect(
          this.userSelect.caKe02,
          TweenObject.cakeupTime,
          TweenObject.cakeoffset,
          cakeMove
        );
  
        this.createAnimateUserSelect(
          this.userSelect.caKe03,
          TweenObject.cakeupTime,
          TweenObject.cakeoffset,
          cakeMove
        );
  
        const cameraMove = new TWEEN.Tween(this.camera.position)
          .to(
            {
              x: this.cpoint.x,
              y: this.cpoint.y,
              z: this.cpoint.z + TweenObject.cameraToZ,
            },
            TweenObject.cakeupTime
          )
          .onComplete(() => {
            this.Ry = this.camera.position.z; //更新半径
            caKeUpMove.start();
            // caKeUpYrate.start();
            cakeMove.forEach((item) => {
              item.start();
            });
            this.ynPreview = true;
            // this.allshowObjctDesc(true);
          })
          .onStop(() => {});
        cameraMove.start();
      },
      allshowObjctDesc(pm_show) {
        var index = 0;
        this.add2dObject(
          this.userSelect.cakebase.name,
          index % 2 == 0 ? "downleft" : "downright",
          pm_show
        );
        index++;
        this.add2dObject(
          this.userSelect.caKeUp.name,
          index % 2 == 0 ? "downleft" : "downright",
          pm_show
        );
        index++;
        this.userSelect.caKe01.forEach((item) => {
          this.add2dObject(
            item.name,
            index % 2 == 0 ? "downleft" : "downright",
            pm_show
          );
          index++;
        });
        this.userSelect.caKe02.forEach((item) => {
          this.add2dObject(
            item.name,
            index % 2 == 0 ? "downleft" : "downright",
            pm_show
          );
          index++;
        });
        this.userSelect.caKe03.forEach((item) => {
          this.add2dObject(
            item.name,
            index % 2 == 0 ? "downleft" : "downright",
            pm_show
          );
          index++;
        });
      },
  
      getZvalueFromX: function (
        pm_x,
        pm_z,
        pm_XOffset //
      ) {
        var newx =
          pm_x +
          (pm_x / Math.abs(pm_x)) * pm_XOffset * this.getPointLen(pm_x, 0, pm_z);
  
        var newZ = newx * (pm_z / pm_x);
  
        return { z: newZ, x: newx };
      },
      clicklineMoveMesh: function () //鼠标左键点击移动
      {
        const mesh = this.scene.getObjectByName(this.MouseEventData.selectName);
        const lineOverPoint = this.moveLine.geometry.attributes.position.array;
        var animateComplete = function () {
          this.updateMeshBox(mesh);
          this.MouseEventData.selectName = null;
          this.reset();
        }.bind(this);
        var animateStart = function () {
          this.MouseEventData.opType = null;
          this.showbox3(this.MouseEventData.selectName, false);
          this.moveLine.visible = false;
        }.bind(this);
  
        this.setControl(true);
        new TWEEN.Tween(mesh.position)
          .to(
            { x: lineOverPoint[3], y: lineOverPoint[4], z: lineOverPoint[5] },
            800
          )
          .onComplete(animateComplete)
          .onStart(animateStart)
          .start();
      },
      myMouseDown: function (
        e //画布的点击事件
      ) {
        if (this.moveLine && this.moveLine.visible) {
          if (e.button == 0) {
            //0左键  1 右键 2 中
            this.clicklineMoveMesh();
          } else {
            this.clickEndMove();
          }
        } else {
          this.mouseSelectMesh(e);
        }
      },
      showbox3: function (
        pm_name,
        yn_show //设置包围盒是否进行显示
      ) {
        var box3 = this.scene.getObjectByName(pm_name + this.boxflag);
  
        if (box3) {
          box3.visible = yn_show;
          this.add2dObject(pm_name, "downleft", yn_show);
          //const label  = this.scene.getObjectByName(pm_name +this.labelflag);
        }
      },
      getPointLen(x, y, z) {
        // console.log("x,y,z",x,y,z,Math.sqrt(x*x+y*y+z*z));
        return Math.sqrt(x * x + y * y + z * z);
      },
      coorDinateTransform: function (pm_x, pm_y, pm_z) {
        var x = pm_x;
        var y = pm_y;
        var z = pm_z;
        x = x - this.cameraInit.width / 2;
        y = -1 * (y - this.cameraInit.height / 2);
        var AzimuthalAngle = this.control.getAzimuthalAngle(); //水平角度
        var PolarAngle = this.control.getPolarAngle(); //垂直角度
        var cx = this.camera.position.x,
          cy = this.camera.position.y,
          cz = this.camera.position.z; //计算距离使用
        var vold = new THREE.Vector3(x, y, 0);
        vold = this.quaternionT(AzimuthalAngle, PolarAngle, vold);
        const myscale =
          this.getPointLen(cx, cy, cz) /
          this.getPointLen(this.cpoint.x, this.cpoint.y, this.cpoint.z);
        var vector1 = new THREE.Vector3(
          this.Round(vold.x * myscale, 0),
          this.Round(vold.y * myscale, 0),
          this.Round(vold.z * myscale, 0)
        ); //
        return vector1;
      },
      vectorPivoting: function (
        pm_vector,
        pm_axis,
        pm_angle //绕轴旋转的角度
      ) {
        var quaternionY = new THREE.Quaternion();
        quaternionY.setFromAxisAngle(pm_axis, pm_angle);
        pm_vector.applyQuaternion(quaternionY);
        return pm_vector;
      },
      quaternionT: function (AzimuthalAngle, PolarAngle, pm_Vector, pm_paaAxes) {
        var pay = this.Round(PolarAngle, 3) == 0 ? 0 : PolarAngle - Math.PI / 2;
        if (pm_paaAxes == null) {
          pm_paaAxes = new THREE.Vector3(0, 1, 0);
          pm_paaAxes = this.vectorPivoting(
            pm_paaAxes,
            new THREE.Vector3(1, 0, 0),
            -1 * pay
          );
  
          //  console.log("基础的Y轴绕X轴进行旋转PA"+-1*pay,pm_paaAxes);
        }
        var vold = pm_Vector;
        vold = this.vectorPivoting(vold, pm_paaAxes, AzimuthalAngle);
        vold = this.vectorPivoting(vold, new THREE.Vector3(1, 0, 0), pay);
        vold = new THREE.Vector3(
          this.Round(vold.x, 3),
          this.Round(vold.y, 3),
          this.Round(vold.z, 3)
        );
        return vold;
      },
      mouseDropUp: function (
        e //鼠标放开后的操作
      ) {
        if (this.dropSelect.id) {
          //点击左侧并添加商品
          var vector1 = this.coorDinateTransform(e.offsetX, e.offsetY, 0);
          this.addMesh(
            this.dropSelect.id,
            vector1,
            this.dropSelect.selectId,
            this.dropSelect.desc
          );
        }
        this.reset();
      },
      lineInit: function (
        e //路径移动
      ) {
        this.setControl(false);
        if (this.moveLine == null) {
          this.moveLine = this.createLine(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 1, 0),
            "moveLine"
          );
          this.moveLine.visible = false;
        }
        this.modeSelect(e); //在移动的时候调用id同名的方法
      },
      createCurve: function (pm_start, pm_end, lineName) {
        var createline = this.scene.getObjectByName(lineName);
        var curve = new THREE.CatmullRomCurve3([
          pm_start,
          //  new THREE.Vector3( (pm_start.x+pm_end.x)/2, (pm_start.y+pm_end.y)/2, (pm_start.z+pm_end.z)/2 ),
          pm_end,
        ]);
        var points = curve.getPoints(50);
        if (createline) {
          createline.geometry.setFromPoints(points);
          return createline;
        }
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        var material = new THREE.LineDashedMaterial({ color: 0xfffff });
  
        createline = new THREE.Line(geometry, material);
        createline.name = lineName;
        this.scene.add(createline);
        return createline;
      },
      createLine: function (
        pm_start,
        pm_end,
        lineName //创建一条线
      ) {
        var createline = this.scene.getObjectByName(lineName);
        if (createline) {
          var points = [];
          points.push(pm_start);
          points.push(pm_end);
          createline.geometry.setFromPoints(points);
          return createline;
        }
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          pm_start.x,
          pm_start.y,
          pm_start.z, // 起点位置
          pm_end.x,
          pm_end.y,
          pm_end.z, // 终点位置
        ]);
        geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        // 创建线条材质
        const material = new THREE.LineBasicMaterial({
          color: 0xffffff,
          linewidth: 3,
        });
  
        createline = new THREE.Line(geometry, material);
  
        createline.name = lineName;
  
        this.scene.add(createline);
  
        return createline;
      },
      reset: function () {
        this.setControl(true);
        this.dropSelect.id = null;
        //this.showbox3(this.MouseEventData.selectName,false);
        // this.MouseEventData.selectName = null;
        // this.MouseEventData.opType   这三个需要额外释放
        this.dropSelect.selectId = null;
        this.dropSelect.desc = null;
        this.MouseEventData.mesh = null;
  
        //this.userSelect.ca
      },
      handleMouseUp: function (e) {
        if (this.dropSelect.id) {
          this.mouseDropUp(e);
        }
        this.reset();
        console.log("释放了模型");
      },
      myWheel: function (
        e //滚轮事件
      ) {
        return;
        var delta = e.wheelDelta || -e.detail;
        const direction = delta > 0 ? "向上滚动" : "向下滚动";
        console.log(direction);
        this.camera.position.set(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z + delta
        );
        this.renderer.render(this.scene, this.camera);
        this.copyCanvasContent(this.renderer.domElement, this.myCanvas);
      },
      addcloneMesh: function (
        pm_PreviousCache,
        pm_vector //添加一个复制的模型
      ) {
        if (!pm_PreviousCache.mesh) {
          return null;
        }
        let newBullets = pm_PreviousCache.mesh;
        let previousSelect = this.getUserSelect(pm_PreviousCache.mesh.name);
        if (previousSelect == null) {
          this.myMessageBox(this.myMessageRage.errkey);
          return null;
        }
  
        //   newBullets.name =  pm_PreviousCache.id+"" + Date.now();
        //   this.userSelect[previousSelect.selectId].push({  id:previousSelect.id,
        //                                                     selectId:previousSelect.selectId,
        //                                                     name:newBullets.name,
        //                                                     position:newBullets.position,
        //                                                     angle:newBullets.rotation,
        //                                                     desc :previousSelect.desc,
        //                                          lock:false});
        console.log(newBullets.rotation);
        return this.addMesh(
          previousSelect.id,
          pm_vector,
          previousSelect.selectId,
          previousSelect.desc,
          newBullets.rotation
        );
      },
      reder: function () {
        const that = this;
        this.renderInterval = setInterval(function () {
          if (!that.control.enabled) {
            return;
          }
  
          TWEEN.update();
  
          if (that.ynPreview) {
            that.EachRotateY = that.EachRotateY + 0.01;
            that.camera.position.set(
              that.Ry * Math.sin(that.EachRotateY),
              0,
              that.Ry * Math.cos(that.EachRotateY)
            );
          }
          that.control.update();
          that.sceneUpdate(that);
  
          if (
            that.Rocker.retAngle &&
            that.Rocker.utype == that.Rocker.utypeRange.SingleMove
          ) {
            //当摇杆的角度发生变化的时候，选择的模型进行移动
            const mesh = that.scene.getObjectByName(
              that.MouseEventData.selectName
            );
            if (mesh && that.crossMainMesh(mesh.name)) {
              const retAngle = that.Rocker.retAngle;
              const moveVelocity = 0.3;
              const vector1 = new THREE.Vector3(
                moveVelocity * retAngle.x,
                0,
                retAngle.y * moveVelocity
              );
              var newMeshPoint = new THREE.Vector3(0, 0, 0);
              newMeshPoint.copy(mesh.position);
              newMeshPoint.add(vector1);
              if (that.collisionDetection(mesh, newMeshPoint, null)) {
                mesh.position.add(vector1);
              }
              that.updateMeshBox(mesh);
            }
          }
          if (that.Rocker.utype == that.Rocker.utypeRange.SingleMove) {
            const mesh = that.scene.getObjectByName(
              that.MouseEventData.selectName
            );
            if (mesh && that.crossMainMesh(mesh.name)) {
              var moveY = 0;
              if (that.Rocker.yUpDirection) {
                moveY = 1;
              }
              if (that.Rocker.yDownDirection) {
                moveY = -1;
              }
              if (moveY != 0) {
                var newPoint = new THREE.Vector3(0, 0, 0);
                newPoint.copy(mesh.position);
                newPoint.add(new THREE.Vector3(0, moveY, 0));
                if (that.collisionDetection(mesh, newPoint, null)) {
                  const vector1 = new THREE.Vector3(0, moveY, 0);
                  mesh.position.add(vector1);
                }
                that.updateMeshBox(mesh);
              }
            }
          }
  
          if (that.Rocker.utype == that.Rocker.utypeRange.ShootingMode) {
            //当摇杆的角度发生变化的时候,进行发射
            const retAngle = that.Rocker.retAngle;
            if (that.poiaimingPointnt.endPoint == null) {
              if (retAngle) {
                that.poiaimingPointnt.x = that.poiaimingPointnt.x + retAngle.x;
                that.poiaimingPointnt.y = that.poiaimingPointnt.y + retAngle.y;
              }
              const intersects = that.raycasterGetMesh(
                that.poiaimingPointnt.x,
                that.poiaimingPointnt.y,
                that.mesh
              );
              if (intersects.length > 0) {
                that.poiaimingPointnt.endPoint = intersects[0].point;
              }
            } else {
              if (retAngle) {
                const newx = that.poiaimingPointnt.x + 0.6 * retAngle.x;
                const newy = that.poiaimingPointnt.y + 0.6 * retAngle.y;
                const intersects = that.raycasterGetMesh(newx, newy, that.mesh);
                if (intersects.length > 0) {
                  that.poiaimingPointnt.endPoint = intersects[0].point;
                  that.poiaimingPointnt.x = newx;
                  that.poiaimingPointnt.y = newy;
                }
              }
            }
            const newphereP = that.poiaimingPointnt.endPoint;
            if (newphereP) {
              that.addSphere(newphereP.x, newphereP.y, newphereP.z, true);
            }
          }
  
          if (that.Rocker.buttonRotateData) {
            if (
              that.MouseEventData.selectName &&
              that.crossMainMesh(that.MouseEventData.selectName)
            ) {
              const getMesh = that.scene.getObjectByName(
                that.MouseEventData.selectName
              );
              if (
                that.collisionDetection(
                  getMesh,
                  getMesh.position,
                  that.Rocker.buttonRotateData
                )
              ) {
                getMesh[
                  "rotate" + that.Rocker.buttonRotateData.axis.toUpperCase()
                ](Number(that.Rocker.buttonRotateData.rotate) * that.rockerRate);
              }
              that.updateMeshBox(getMesh);
            }
          }
        }, 40);
      },
      //获取userdata中存储的select
      getUserSelect: function (pm_name, pm_itemKey, pm_arr) {
        if (pm_arr == null) {
          pm_arr = this.userSelect.caKe01.concat(this.userSelect.caKe02);
        }
        for (var i = pm_arr.length - 1; i >= 0; i--) {
          var name = pm_arr[i].name;
          if (name == pm_name) {
            if (pm_itemKey == null) {
              return pm_arr[i];
            } else {
              return pm_arr[i][pm_itemKey];
            }
          }
        }
        return null;
      },
      sceneUpdate: function (pm_that) {
        pm_that.renderer.render(pm_that.scene, pm_that.camera);
        pm_that.copyCanvasContent(
          pm_that.renderer.domElement,
          pm_that.myCanvas,
          true
        );
  
        pm_that.othersRenderer.forEach((item) => {
          item.renderer.render(pm_that.scene, item.camera);
          pm_that.copyCanvasContent(item.renderer.domElement, item.canvas, true);
        });
  
        //pm_that.css3render.render(pm_that.scene, pm_that.camera);
      },
      getCakeSelectForid: function (pm_id) {
        let arrSelect = [];
  
        this.cakeSelect.forEach((item) => {
          arrSelect = arrSelect.concat(item.selectList);
        });
  
        return arrSelect.filter((item) => {
          return item.id == pm_id;
        });
      },
      copyCanvasContent: function (sourceCanvas, targetCanvas) {
        // 获取目标画布的2D渲染上下文
        var ctx = targetCanvas.getContext("2d");
        ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height); // 清除目标画布的内容
        // 将源画布绘制到目标画布上
        ctx.drawImage(sourceCanvas, 0, 0);
      },
      setZero: function (
        pm_mesh,
        yn_showBox //归零并且显示包围盒
      ) {
        pm_mesh.geometry.computeBoundingBox();
        pm_mesh.geometry.center();
  
        /*  pm_mesh.position.set(0,0,0);
               var  boundingBox = new THREE.Box3().setFromObject(pm_mesh);
              var center = new THREE.Vector3();
              boundingBox.getCenter(center)
              // 计算偏移量
              var offset = new THREE.Vector3();
              offset.copy(center);
              offset.multiplyScalar(-1);
              // 将模型的原点移动到对象的中心
              pm_mesh.position.add(offset);//   copy(center).multiplyScalar(-1);  */
  
        /*   var size  =new THREE.Vector3();
              boundingBox.getSize(size);
              boundingBox.setFromCenterAndSize(pm_mesh.position,size);
  
              const boundingBoxHelper = new THREE.Box3Helper(boundingBox, 0xffffff);
              this.scene.add(boundingBoxHelper); */
        // boundingBox.position.add(offset);
        console.log("清零坐标", pm_mesh.position);
      },
      getItemFromSelect: function (
        pm_meshName //获取基础的描述
      ) {
        if (this.userSelect.cakebase.name == pm_meshName) {
          return this.userSelect.cakebase.desc;
        }
        if (this.userSelect.caKeUp.name == pm_meshName) {
          return this.userSelect.caKeUp.desc;
        }
        var ret = null;
        ret = this.userSelect.caKe01?.filter((item) => {
          return item.name == pm_meshName;
        });
        if (ret?.length > 0) {
          return ret[0].desc;
        }
        ret = this.userSelect.caKe02?.filter((item) => {
          return item.name == pm_meshName;
        });
        if (ret?.length > 0) {
          return ret[0].desc;
        }
        ret = this.userSelect.caKe03?.filter((item) => {
          return item.name == pm_meshName;
        });
        if (ret?.length > 0) {
          return ret[0].desc;
        }
      },
      delArrSelect: function (
        pm_arr,
        pm_name //删除数组里的内容
      ) {
        for (var i = pm_arr?.length - 1; i >= 0; i--) {
          var name = pm_arr[i].name;
          if (name == pm_name) {
            pm_arr.splice(i, 1);
            break;
          }
        }
      },
      removeMesh: function (
        pm_name,
        yndispose //删除模型
      ) {
        const delarr = [
          pm_name,
          pm_name + this.boxflag,
          pm_name + this.labelflag,
          pm_name + this.labelline,
        ];
        delarr.forEach((item) => {
          const model = this.scene.getObjectByName(item);
          if (model) {
            this.scene.remove(model);
            this.disposeMesh(model, yndispose);
          }
        });
        this.delArrSelect(this.mesh, pm_name);
        this.delArrSelect(this.userSelect.caKe01, pm_name);
        this.delArrSelect(this.userSelect.caKe02, pm_name);
        this.delArrSelect(this.userSelect.caKe03, pm_name);
      },
      disposeMesh: function (pm_mesh, yndispose) {
        if (!yndispose) {
          return;
        }
        pm_mesh.geometry.dispose();
        if (pm_mesh.material.isMaterial) {
          console.log("这是单材质");
          pm_mesh.material.dispose();
        } else {
          console.log("这是材质数组");
          for (var i = 0; i < pm_mesh.material.length; i++) {
            pm_mesh.material[i].dispose();
          }
        }
      },
      limitJudge(id, selectid) {
        //获取当前选择的总个数个数
        const userSelectList = this.userSelect[selectid];
        //选择总个数 大于 分类限制总个数 直接返回false
        const choseItem = this.cakeSelect.filter(
          (item) => item.selectId == selectid
        );
        const allNumMax = choseItem[0].maxnum;
        if (userSelectList.length >= allNumMax) {
          return { type: "all", allNumMax, choseItem };
        }
  
        //判断单个 个数
        const interList = choseItem[0].selectList;
  
        const interItems = interList.filter((item) => item.id == id);
  
        const interMax = interItems[0].maxnum;
  
        const choseInterItems = userSelectList.filter((item) => item.id == id);
  
        if (choseInterItems.length >= interMax) {
          return { type: "inter", interMax, interItems };
        }
      },
      addMesh: function (pm_id, pm_vector, pm_selectid, pm_desc, pm_angle) {
        //最大值判断，超出提示不能添加。
        const isLimitMax = this.limitJudge(pm_id, pm_selectid);
        if (isLimitMax) {
          if (isLimitMax.type == "inter") {
            const interItemName = isLimitMax.interItems[0].name;
            this.showTextMessage(
              `${interItemName}最多添加${isLimitMax.interMax}个！`,
              pm_id
            );
          }
          if (isLimitMax.type == "all") {
            const allName = isLimitMax.choseItem[0].Name;
            this.showTextMessage(
              `${allName}系列最多添加${isLimitMax.allNumMax}个！`,
              pm_id
            );
          }
          console.log(isLimitMax, "输出");
          return;
        }
        console.log(isLimitMax);
        // 遍历所有加载的场景，找到匹配的模型
        let foundModel = null;
        for (const scene of this.gltfScene) {
          scene.traverse(function (child) {
            if (child.isMesh && child.name === pm_id) {
              foundModel = child.clone();
              return; // 退出遍历
            }
          });
          if (foundModel) break; // 找到模型后退出循环
        }
  
        if (!foundModel) {
          console.error(`未找到模型: ${pm_name}`);
          return;
        }
  
        var Cylinder44 = foundModel;
        //  Cylinder44. position.set(0,0,0);
        Cylinder44.scale.set(this.scint, this.scint, this.scint);
        Cylinder44.name = pm_id + "" + Date.now();
        // Cylinder44.rotation.x = Math.PI / 2;
  
        // Cylinder44.position.set(100, 100, 600);
        this.scene.add(Cylinder44);
  
        this.setZero(Cylinder44, false);
  
        let pm_direction;
        let retItem = this.getCakeSelectForid(pm_id);
        if (retItem.length > 0) {
          pm_desc = retItem[0].desc;
          pm_direction = retItem[0].direction;
        }
  
        console.log(Cylinder44, "模型参数");
  
        const item = {
          id: pm_id,
          selectId: pm_selectid,
          name: Cylinder44.name,
          position: Cylinder44.position,
          angle: Cylinder44.rotation,
          direction: pm_direction,
          desc: pm_desc,
          lock: false,
        };
        this.userSelect[pm_selectid].push(item);
  
        const arr = this.getImgById(pm_selectid, pm_id);
  
        item.price = arr.price;
        item.unm = 1;
        item.unit = arr.unit;
        item.jgid = arr.jgid;
        item.KEYID = arr.KEYID;
        item.ATTCODE = arr.ATTCODE;
        item.SPID_YL = arr.SPID_YL;
        item.CSTCODE = arr.CSTCODE;
        item.newName = arr.name;
  
        if (pm_angle != null) {   //???
            // Cylinder44.rotateX(pm_angle._x - Cylinder44.rotation.x  );
            // var axiosZ = new THREE.Vector3(0,0,1);
            // axiosZ= this.vectorPivoting(axiosZ,new THREE.Vector3(1,0,0),pm_angle._x - Cylinder44.rotation.x);
            // Cylinder44.rotateZ(pm_angle._z - Cylinder44.rotation.z );
        }
  
       
  
        Cylinder44.position.x=pm_vector.x/2 ;
        Cylinder44.position.y=pm_vector.y/2;
        Cylinder44.position.z=pm_vector.z/2;
        this.addBox(Cylinder44);
        this.MouseEventData.selectName = Cylinder44.name;
        //console.log("设置后的坐标",Cylinder44.position);
        this.mesh.push(Cylinder44);
        return Cylinder44;
      },
      //通过id匹配图片
      getImgById: function (pm_selectid, pm_id) {
        const outarr = this.cakeSelect.find(
          (item) => item.selectId == pm_selectid
        );
        const arr = outarr.selectList.find((item) => item.id == pm_id);
        return arr;
      },
      //已摆放模型
      getlaidModelList(item) {
        this.laidModel.push(item);
        const arr = this.laidModel;
  
        const uniqueArray = arr.filter(
          (item, index, self) => index === self.findIndex((t) => t.id === item.id)
        );
        this.laidModel = uniqueArray;
      },
      //点击当前已摆放
      penSelect(item) {
        this.curdelItem = item;
      },
      delAllCurModel() {
        if (!this.curdelItem) {
          this.myMessageBox(this.myMessageRage.delTips);
          return;
        }
        const userarr = [
          ...this.userSelect.caKe01,
          ...this.userSelect.caKe02,
          ...this.userSelect.caKe03,
        ];
        const useDelList = userarr.filter(
          (item) => item.id == this.curdelItem.id
        );
        if (useDelList.length > 0) {
          for (let item of useDelList) {
            this.removeMesh(item.name, true);
          }
          this.laidModel = this.laidModel.filter(
            (item) => item.id !== this.curdelItem.id
          );
        }
      },
      addBaseMesh: function (pm_id, pm_basetype, pm_name, pm_desc, item) {
        var newmeshname = pm_name || pm_id;
        // 遍历所有加载的场景，找到匹配的模型
        console.log(pm_name, "namename");
        let foundModel = null;
        for (const scene of this.gltfScene) {
          scene.traverse(function (child) {
            if (child.isMesh && child.name === pm_name) {
              foundModel = child.clone();
              return; // 退出遍历
            }
          });
          if (foundModel) break; // 找到模型后退出循环
        }
  
        if (!foundModel) {
          console.error(`未找到模型: ${pm_name}`);
          return;
        }
        var Cylinder44 = foundModel;
  
        Cylinder44.position.set(0, 0, 0);
  
        Cylinder44.scale.set(this.scint, this.scint, this.scint);
  
        Cylinder44.name = newmeshname;
        // 调整模型的旋转
        // Cylinder44.rotation.x = Math.PI / 2; // 例如，将模型绕X轴旋转90度
        this.scene.add(Cylinder44);
        this.setZero(Cylinder44, false);
        if (this.userSelect[pm_basetype].name) {
          this.removeMesh(this.userSelect[pm_basetype].name, true);
        }
        this.mesh.push(Cylinder44);
        this.addBox(Cylinder44);
        let retItem = this.getCakeSelectForid(pm_id);
        if (retItem.length > 0) {
          pm_desc = retItem[0].desc;
        }
  
        const values = {
          ...retItem[0],
          id: pm_id,
          name: newmeshname,
          desc: pm_desc,
          selectId: pm_basetype,
          newName: retItem[0].name,
          position: Cylinder44.position,
          angle: Cylinder44.rotation,
          unm: 1,
        };
  
        this.MouseEventData.selectName = Cylinder44.name;
        this.userSelect[pm_basetype] = values;
  
        if (item) {
          const jsItem = JSON.parse(item);
          this.userSelect[pm_basetype].price = jsItem.price;
        }
        this.showbox3(Cylinder44.name, false);
        //console.log('我看看这个44',this.userSelect[basetype]);
      },
      addBox: function (
        pm_mesh //添加包围盒
      ) {
        this.setObbBox3(pm_mesh);
  
        if (this.MouseEventData.selectName) {
          //隐藏上一个盒子
          this.showbox3(this.MouseEventData.selectName, false);
        }
        this.showbox3(pm_mesh.name, true);
      },
      addtestBox: function (
        pm_mesh //添加包围盒
      ) {
        let box3_helper = this.Scene.getObjectByName(
          pm_mesh.name + "_test_" + this.boxflag
        );
        if (!box3_helper) {
          const box3 = new THREE.Box3();
          // box3.expandByObject(pm_mesh);
          /////**********************新新的代码 */
          this.setObbBox3(pm_mesh, box3);
          //pm_mesh.userData.obb.form
          let box3_helper = new THREE.Box3Helper(box3, 0xfaaaff);
          box3_helper.name = pm_mesh.name + "_test_" + this.boxflag;
          this.scene.add(box3_helper);
        }
        return box3_helper;
      },
      addTextSpirit: function (baseWidth, size, pm_desc, pm_meshName, pm_scale) {
        const borderSize = 2;
        const ctx = document.createElement("canvas").getContext("2d");
        const fontSize = size;
        const font = `${fontSize}px bold sans-serif`;
        ctx.font = font;
        const textWidth = ctx.measureText(pm_desc).width;
        const doubleBorderSize = borderSize * 2;
        const width = textWidth + doubleBorderSize; //  baseWidth + doubleBorderSize;
        const height = fontSize + doubleBorderSize; //Math.ceil(textWidth/width)*size +  doubleBorderSize;
        ctx.canvas.width = width;
        ctx.canvas.height = height;
  
        // 设置背景色为透明
        ctx.fillStyle = "rgba(0, 0, 0, 0)"; // 透明背景
        ctx.fillRect(0, 0, width, height);
  
        // 设置文本样式
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillStyle = "white"; // 文字颜色设置为白色
  
        // 绘制文本
        ctx.translate(width / 2, height / 2);
        ctx.scale(pm_scale, pm_scale);
        ctx.fillText(pm_desc, 0, 0);
  
        const canvas = ctx.canvas;
        const canvasTexture = new THREE.CanvasTexture(canvas);
        canvasTexture.minFilter = THREE.LinearFilter;
        canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
        canvasTexture.wrapT = THREE.ClampToEdgeWrapping;
        const labelMaterial = new THREE.SpriteMaterial({
          map: canvasTexture,
          transparent: true,
        });
  
        const textLabel = new THREE.Sprite(labelMaterial);
        textLabel.scale.x = width - 4; // 调整宽度缩放
        textLabel.scale.y = height - 4; // 调整高度缩放
        textLabel.name = pm_meshName + this.labelflag;
        this.scene.add(textLabel);
        return textLabel;
      },
  
      add2dObject: function (
        pm_meshName,
        pm_direction,
        yn_show // 根据模型名称添加  添加2d空间的方向，是否显示
      ) {
        if (yn_show == null) {
          yn_show = true;
        }
        if (pm_direction == null) {
          pm_direction = "downleft";
        }
        //pm_direction的值取自getBoxPointVector的键值
        var textLabel = this.scene.getObjectByName(pm_meshName + this.labelflag);
        const mesh = this.scene.getObjectByName(pm_meshName);
  
        if (!textLabel) {
          const textContent = this.getItemFromSelect(pm_meshName);
          const SpiritWidth = 150,
            SpiritHeight = 40;
          textLabel = this.addTextSpirit(
            SpiritWidth,
            SpiritHeight,
            textContent,
            pm_meshName,
            2
          );
        }
        var vect;
        //将标签放在包围盒中心线的延长线上，再往下一点   //空间直线方程求解
        if (
          this.userSelect.caKeUp.name == pm_meshName ||
          this.userSelect.cakebase.name == pm_meshName
        ) {
          vect = this.getBoxPointVector(
            pm_meshName,
            pm_direction,
            30,
            10,
            textLabel.scale.x
          );
        } else {
          vect = this.getBoxPointVector(
            pm_meshName,
            pm_direction,
            20,
            -35,
            textLabel.scale.x
          );
        }
        textLabel.visible = yn_show;
        const line = this.scene.getObjectByName(pm_meshName + this.labelline);
        if (line) {
          line.visible = yn_show;
        }
        if (vect) {
          textLabel.position.set(vect.x, vect.y, vect.z);
        }
      },
      getBoxPointVector: function (
        pm_mesname,
        pm_key,
        pm_levelOffset,
        pm_verticalOffset,
        pm_textContentLen //获取包围盒的所有顶点  8个点 包含中心点和四周的顶点
      ) {
        // const pm_mesname= this.MouseEventData.selectName
        const mesh = this.scene.getObjectByName(pm_mesname);
        if (!mesh) {
          //this.myMessageBox("选择一个模型哈！");
          return;
        }
        let maxlen = 0;
        let maxIndexKey = "";
        let testPoint = [
          "downCenter",
          "leftCenter",
          "rightCenter",
          "frontCenter",
          "backCenter",
        ];
  
        testPoint.forEach((item, index) => {
          let testP =
            mesh.userData.myCustemVertices &&
            mesh.userData.myCustemVertices[item];
          if (testP) {
            let testlen = this.getPointLen(testP.x, testP.y, testP.z);
            if (testlen > maxlen) {
              maxlen = testlen;
              maxIndexKey = testPoint[index];
            }
          }
        });
  
        /* const box = new THREE.Box3().setFromObject(mesh);
        // 获取包围盒的中心点
        const center = new THREE.Vector3();
        box.getCenter(center);
        // 获取包围盒的尺寸
        const size = new THREE.Vector3();
        box.getSize(size);
        // 计算包围盒的八个顶点
        const halfSize = new THREE.Vector3(size.x / 2, size.y / 2, size.z / 2);
        const vertices =
        {
            downCenter : new THREE.Vector3(0, -halfSize.y, 0 ),
            downleft  :  new THREE.Vector3(-1*pm_levelOffset, -halfSize.y +pm_verticalOffset , 0 ),
            downright :  new THREE.Vector3(pm_levelOffset, -halfSize.y +pm_verticalOffset, 0 ),
  
            upBackLeft: new THREE.Vector3(-halfSize.x , halfSize.y , -halfSize.z ), // 后上左
            upBackRight:  new THREE.Vector3(halfSize.x , halfSize.y , -halfSize.z ), // 后上右
        };
        for(var key in vertices)
        {
            vertices[key] =  this.vectorPivoting(vertices[key],new THREE.Vector3(1,0,0),mesh.rotation.x);
        }
        var axiosZ = new THREE.Vector3(0,0,1);
        axiosZ= this.vectorPivoting(axiosZ,new THREE.Vector3(1,0,0),mesh.rotation.x);
        for(var key in vertices)
        {
             vertices[key] = this.vectorPivoting(vertices[key],axiosZ,mesh.rotation.z);
             vertices[key].add(center);
             //this.addSphere(vertices[key].x,vertices[key].y,vertices[key].z,true,5,key+"sdsd");
        } */
        let p = new THREE.Vector3().copy(
          mesh.userData.myCustemVertices[maxIndexKey]
        );
        pm_levelOffset =
          ((pm_levelOffset + pm_textContentLen / 2) * p.x) / Math.abs(p.x);
  
        let ccc = mesh.position.y - p.y;
        pm_verticalOffset =
          ccc == 0 ? 0 : (pm_verticalOffset * ccc) / Math.abs(ccc);
  
        p.add(new THREE.Vector3(pm_levelOffset, pm_verticalOffset, 0));
        this.createLine(
          mesh.userData.myCustemVertices[maxIndexKey],
          p,
          pm_mesname + this.labelline
        );
        //现在需要的是在中心线的延长线上把2维标签加上去
        return p;
      },
      addSphere: function (
        pm_x,
        pm_y,
        pm_z,
        pm_visible,
        pm_R,
        pm_name,
        pm_color
      ) {
        if (pm_R == null) {
          pm_R = 5;
        }
        if (pm_name == null) {
          pm_name = "sphereAddAtMainMesh";
        }
        if (pm_color == null) {
          pm_color = 0xffff00;
        }
        var sphere = this.scene.getObjectByName(pm_name);
        if (!sphere) {
          const geometry = new THREE.SphereGeometry(pm_R, 32, 16);
          const material = new THREE.MeshBasicMaterial({ color: pm_color });
          sphere = new THREE.Mesh(geometry, material);
          sphere.name = pm_name;
          this.scene.add(sphere);
        }
        sphere.position.set(pm_x, pm_y, pm_z);
        //  const  line =   this.createCurve(this.camera.position,sphere.position,sphere.name+this.labelline);
        // line.visible =pm_visible;
        sphere.visible = pm_visible;
        return sphere;
      },
      addDirectionalLight(x, y, z) {
        const pointLightup = new THREE.DirectionalLight(0xffffff, 1);
        pointLightup.position.set(x, y, z);
        pointLightup.decay = 0.0;
        this.scene.add(pointLightup);
      },
      showTextMessage(string, pm_messgeKey) {
        const pm_vector = new THREE.Vector3(0, 100, 0);
  
        this.timefun(string, pm_messgeKey, pm_vector);
        this.myMessageRage.timer = setTimeout(() => {
          this.myMessageRage.timer = null;
        }, this.myMessageRage.tiket);
      },
      myMessageBox: function (
        pm_messgeKey,
        pm_vector //定制的一个消息窗体
      ) {
        if (this.myMessageRage.timer) {
          return;
        }
        if (!pm_vector) {
          pm_vector = new THREE.Vector3(0, 100, 0);
        }
        const msg = this.myMessageRage.getMeg(pm_messgeKey);
        if (!msg) {
          msg = pm_messgeKey + "没有设置";
          sessionStorage.setItem(pm_messgeKey + "_____________", "没有设置");
        }
        const that = this;
        that.timefun(msg, pm_messgeKey, pm_vector);
        this.myMessageRage.timer = setTimeout(() => {
          this.myMessageRage.timer = null;
        }, this.myMessageRage.tiket);
      },
      timefun: function (msg, pm_messgeKey, pm_vector) {
        const pm_Spiritname = pm_messgeKey + Date.now();
        const SpiritWidth = 600,
          SpiritHeight = 40;
        const textLabel = this.addTextSpirit(
          SpiritWidth,
          SpiritHeight,
          msg,
          pm_Spiritname,
          3
        );
        textLabel.position.set(pm_vector.x, pm_vector.y, pm_vector.z);
        new TWEEN.Tween(textLabel.position)
          .to(
            {
              x: textLabel.position.x,
              y: textLabel.position.y + 500,
              z: textLabel.position.z,
            },
            8000
          )
          .onComplete(() => {
            this.removeMesh(pm_Spiritname, true);
          })
          .onUpdate(() => {
            textLabel.material.opacity = textLabel.material.opacity - 0.015;
          })
          .start();
      },
      restoreImage(e) {
        //网页签入到小程序中
  
        console.log(e, "保存的数据");
        //载入可编辑
        if (e.userSelect) {
          this.presentProcedure = 2;
  
          const saveData = e.userSelect;
          for (const key in saveData) {
            if (Array.isArray(saveData[key])) {
              saveData[key].forEach((item) => {
                if (item.id) {
                  this.addMesh(
                    item.id,
                    new THREE.Vector3(
                      item.position.x,
                      item.position.y,
                      item.position.z
                    ),
                    item.selectId,
                    item.desc,
                    item.angle
                  );
                }
              });
            } else {
              if (saveData[key].id) {
                this.addBaseMesh(
                  saveData[key].id,
                  saveData[key].selectId,
                  saveData[key].id,
                  saveData[key].desc
                );
              }
            }
          }
        }
        //载入不可编辑
      },
      initEvent(a) {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("./gltf/");
        dracoLoader.setDecoderConfig({ type: "js" });
        dracoLoader.preload();
        loader.setDRACOLoader(dracoLoader);
  
        const loadGLBFiles = async () => {
          const filePaths = this.cakeSelect.flatMap((item) =>
            item.selectList.map((selectItem) => `./${selectItem.id}.glb`)
          );
  
          const loadPromises = filePaths.map((filePath) => {
            return loader
              .loadAsync(filePath)
              .then((gltf) => {
                console.log(`gltf对象场景属性scale for ${filePath}`, gltf);
  
                // 遍历场景图并记录每个模型的 ID
                const modelIds = [];
                gltf.scene.traverse(function (child) {
                  if (child.isMesh) {
                    modelIds.push(child.name);
                  }
                });
  
                console.log(`模型 IDs for ${filePath}:`, modelIds);
  
                return gltf.scene;
              })
              .catch((error) => {
                console.error(`加载 ${filePath} 时出错:`, error);
                return null; // 返回 null 表示加载失败
              });
          });
          const totalFiles = filePaths.length;
          let loadedFiles = 0;
          loadPromises.forEach((promise) => {
            promise.then(() => {
              loadedFiles++;
              this.percentage = (loadedFiles / totalFiles) * 100;
            });
          });
  
          const gltfScenes = await Promise.all(loadPromises);
  
          this.gltfScene = gltfScenes.filter((scene) => scene !== null); // 过滤掉加载失败的场景
        };
  
        loadGLBFiles().then((scenes) => {
          console.log("所有场景加载完成:", scenes);
          this.percentage = 100;
          //载入
          console.log(a, "===载入的数据");
          if (a?.historyDate) {
            this.restoreImage(a.historyDate);
          }
          if (a?.datalist) {
            //载入只查看
            this.seeDateList(this.cakeSelect);
          }
        });
      },
      seeDateList(arr) {
        this.onlySee = true;
        this.RockerNextOtype();
        console.log(arr, "展示数据");
        const userValue = {};
        for (let item of arr) {
          if (item.selectId == "cakebase" || item.selectId == "caKeUp") {
            userValue[item.selectId] = item.selectList[0];
            userValue[item.selectId].position = JSON.parse(
              userValue[item.selectId].position
            );
            userValue[item.selectId].angle = JSON.parse(
              userValue[item.selectId].angle
            );
          } else {
            userValue[item.selectId] = item.selectList;
            for (let v of item.selectList) {
              v.position = JSON.parse(v.position);
              v.angle = JSON.parse(v.angle);
            }
          }
        }
        this.userSelect = userValue;
        const saveData = userValue;
        for (const key in saveData) {
          if (Array.isArray(saveData[key])) {
            saveData[key].forEach((item) => {
              if (item.id) {
                this.addMesh(
                  item.id,
                  new THREE.Vector3(
                    item.position.x,
                    item.position.y,
                    item.position.z
                  ),
                  item.selectId,
                  item.desc,
                  item.angle
                );
              }
            });
          } else {
            if (saveData[key].id) {
              this.addBaseMesh(
                saveData[key].id,
                saveData[key].selectId,
                saveData[key].id,
                saveData[key].desc
              );
            }
          }
        }
      },
      changeModels() {
        if (!this.isShowModelValueChange) {
          this.isShowModelValueChange = true;
          this.camera.position.set(0, 10, 0); // 设置相机位置到上方
          this.camera.lookAt(0, 0, 0); // 相机看向原点
          this.setControl(false);
        } else {
          this.isShowModelValueChange = false;
          this.camera.position.set(this.cpoint.x, this.cpoint.y, this.cpoint.z + 2000);
          // this.camera.position.set(this.cpoint.x, this.cpoint.y, this.cpoint.z);
          this.camera.lookAt(0, 0, 0); // 相机看向原点
          this.setControl(true);
        }
      },
  
      /*  getindexData:function(dataArrIndex)
          {
  
              ///https://www.cnblogs.com/aichitudousien/p/17357308.html
                  var that = this;
                  //定义一下上一级idn
                  var parentId = 0;
  
                  var posjson =  this.HierarchicalDisplay.getDataJson[dataArrIndex];
                  if( dataArrIndex > 0 )
                  {
                      parentId  = this.HierarchicalDisplay.selectData[dataArrIndex -1].ID;
                      if(!parentId )
                      {
                          alert("请选择之后再进行筛选")
                          return;
                      }
                      var dataobjct  = JSON.parse(this.HierarchicalDisplay.getDataJson[dataArrIndex].data);
                      dataobjct.parentId  =parentId;
                      posjson.data = JSON.stringify(dataobjct);
                  }
                  //使用posjson作为报文发送ajax，并将获取数据并写入到索引为dataArrIndex的 HierarchicalDisplay.dataArr中
                  console.log(posjson);
                  axios.post("http://localhost:44378/api/ReqMuster/Handle",posjson)
                      .then(function (response)
                      {
                        console.log(response.data);
  
                        that.HierarchicalDisplay.dataArr[dataArrIndex] = JSON.parse(response.data.data);
                        Vue.set(that.HierarchicalDisplay.dataArr, dataArrIndex, JSON.parse(response.data.data));
                        console.log(that.HierarchicalDisplay.dataArr[dataArrIndex].length);
                      })
              } */
    },
  
    mounted: function () {
      this.myCanvas = document.querySelector("#myCanvas");
      this.initPoiaimingPointnt();
      this.myCanvas.width = this.cameraInit.width;
      this.myCanvas.height = this.cameraInit.height;
      this.scene = new THREE.Scene();
      this.gltfScene = new THREE.Scene();
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      // this.material = new THREE.MeshBasicMaterial({color: 0xff0000,}); //0xff0000设置材质颜色为红色
      /*this.material  = new THREE.LineBasicMaterial( {
                      color: 0xff0000,
                      linewidth: 1,
                      linecap: 'round', //ignored by WebGLRenderer
                      linejoin:  'round' //ignored by WebGLRenderer
                  } ); */
      /* this.material = new THREE.PointsMaterial({
                      color: 0xffff00,
                      size: 1.0 //点对象像素尺寸
                  });     */
  
      this.material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
      });
  
      const geometryx = new THREE.SphereGeometry(80, 32, 16);
      this.sphere = new THREE.Mesh(geometryx, this.material);
      this.sphere.position.set(130, 100, 100);
  
      // const axesHelper = new THREE.AxesHelper(this.cameraInit.width / 2);
      // this.scene.add(axesHelper);
  
      const lightGroup = new THREE.Group();
      //光源
  
      const ambient = new THREE.AmbientLight(0xffffff, 1);
      ambient.position.set(300, 300, 300);
      ambient.decay = 0.0;
      this.scene.add(ambient);
  
      //光源2
      let LightPosition = 1500;
      this.addDirectionalLight(0, LightPosition, 0);
  
      // this.mesh.push(mymesh);
      this.camera = new THREE.PerspectiveCamera(
        this.cameraInit.fov,
        this.cameraInit.width / this.cameraInit.height,
        this.cameraInit.near,
        this.cameraInit.far
      );
  
      this.camera.lookAt(0, 0, 0);
  
      this.camera.position.set(this.cpoint.x, this.cpoint.y, this.cpoint.z + 2000);
  
      // const leftCanvas = document.querySelector("#leftCanvas");
      const topCanvas = document.querySelector("#topCanvas");
      // const rightCanvas = document.querySelector("#rightCanvas");
  
      // const leftcamera = new THREE.PerspectiveCamera(
      //   this.cameraInit.fov,
      //   this.cameraInit.width / this.cameraInit.height,
      //   this.cameraInit.near,
      //   this.cameraInit.far
      // );
      const toptcamera = new THREE.PerspectiveCamera(
        this.cameraInit.fov,
        this.cameraInit.width / this.cameraInit.height,
        this.cameraInit.near,
        this.cameraInit.far
      );
      // const rightcamera = new THREE.PerspectiveCamera(
      //   this.cameraInit.fov,
      //   this.cameraInit.width / this.cameraInit.height,
      //   this.cameraInit.near,
      //   this.cameraInit.far
      // );
  
      // leftcamera.zoom = 0.6;
      toptcamera.zoom = 0.8;
      // rightcamera.zoom = 0.6;
  
      // leftcamera.updateProjectionMatrix();
      toptcamera.updateProjectionMatrix();
      // rightcamera.updateProjectionMatrix();
  
      // this.othersRenderer.push({
      //   direction: "Left",
      //   camera: leftcamera,
      //   canvas: leftCanvas,
      //   location: new THREE.Vector3(-1 * this.cpoint.z, 0, 0),
      // });
      this.othersRenderer.push({
        direction: "Top",
        camera: toptcamera,
        canvas: topCanvas,
        location: new THREE.Vector3(0, this.cpoint.z, 0),
      });
      // this.othersRenderer.push({
      //   direction: "Right",
      //   camera: rightcamera,
      //   canvas: rightCanvas,
      //   location: new THREE.Vector3(this.cpoint.z, 0, 0),
      // });
  
      this.othersRenderer.forEach((item) => {
        item.camera.lookAt(0, 0, 0);
        item.camera.position.set(
          item.location.x,
          item.location.y,
          item.location.z
        );
        //item.camera.position.set(100, item.location.y, item.location.z);
        item.renderer = new THREE.WebGLRenderer({
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        });
        item.renderer.setSize(item.canvas.width, item.canvas.height);
        item.control = new OrbitControls(item.camera, item.canvas);
      });
  
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      });
  
      this.renderer.setSize(this.cameraInit.width, this.cameraInit.height);
  
      this.renderer.render(this.scene, this.camera);
  
      this.copyCanvasContent(this.renderer.domElement, this.myCanvas);
  
      this.control = new OrbitControls(this.camera, this.myCanvas);
      this.control.enablePan = false;
  
      var inimytControl = function (pm_control) {
        pm_control.minDistance = 250;
        pm_control.maxDistance = 800;
  
        pm_control.minPolarAngle = 0.1;
        pm_control.maxPolarAngle = Math.PI;
        // y轴的旋转的角度
        pm_control.minAzimuthAngle = 0;
        pm_control.maxAzimuthAngle = 1.99 * Math.PI;
  
        pm_control.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
        pm_control.autoRotateSpeed = 1;
        pm_control.target = new THREE.Vector3(0, 0, 0);
      };
      inimytControl(this.control);
  
      this.control.addEventListener("change", function (event) {
        //console.log("getAzimuthalAngle=",AzimuthalAngle, "getPolarAngle"+PolarAngle );
      });
  
      this.reder();
      // this.restoreImage();
    },
    created() {
      // this.loadingGif();
  
      //1.获取屏幕宽度
      const screenWidth = window.innerHeight;
      console.log(screenWidth, "屏幕宽度");
      this.cameraInit.width = screenWidth;
      this.cameraInit.height = screenWidth;
      this.cpoint.z = (1.732 / 2) * screenWidth;
  
      //2.小程序传来的数据
      const queryParams = new URLSearchParams(window.location.search);
      const param = decodeURIComponent(queryParams.get("info"));
      let a = JSON.parse(param);
      console.log(a, "小程序传来");
  
      if(a?.SPID){
        this.SPID=a.SPID;
        //去数组cakeSizeList中查找匹配的尺寸
        this.cakeSizeList.forEach((item,index)=>{
          if(item.spid==a.SPID){
             this.curCakeSizeChose = index;
          }
        })
         const size = this.cakeSizeList[this.curCakeSizeChose].size;
        let oneSize = 8;
        this.scint = oneSize * size;
      }
      //3.如果传来了2d数据， 渲染2d图
      if (a?.draw2D?.length) {
          let seve2ddata = a.draw2D.map(item => {
              return {
                  ...item,
                  position: JSON.parse(item.position),
                  rotation: JSON.parse(item.rotation),
                  scale: JSON.parse(item.scale)
              };
          });
          console.log(seve2ddata, '小程序传来的2d数据');
          sessionStorage.setItem("mesh2d", JSON.stringify(seve2ddata));  //缓存2d数据
  
          setTimeout(()=>{
             this.loadmesh();
          })
      }
     
      if (a && a.cakeSelect) {//4，如果有cakeSelect   就代表可编辑
        for (let item of a.cakeSelect) {
          for (let _item of item.selectList) {
            _item.desc = _item.name;
          }
        }
        this.cakeSelect = a.cakeSelect;
        this.allCakeid = a.SPID;
        this.basePrice = a.SPprice;
        let cakeObj = {
          size: 8,
          text: a.SPECS,
        };
        this.cakeSizeList = [cakeObj];
        let oneSize = 8;
        this.scint = oneSize * cakeObj.size;
        //5，小程序订单页进入 只查看 不能编辑
      } else if (a && a.datalist) {  
        console.log(a, "小程序查看用");
        // this.scint = 2.8 * 8;
        const valuelist = a.datalist;
        const cakeSelect = Object.values(
          valuelist.reduce((acc, item) => {
            const {
              selectId,
              id,
              name,
  
              modelName,
            } = item;
  
            if (!acc[selectId]) {
              acc[selectId] = {
                selectId,
                Name: name,
                curSelectIndex: 0,
                selectList: [],
              };
            }
  
            acc[selectId].selectList.push({
              ...item,
              id,
              name: modelName,
              money: "",
              desc: name,
            });
  
            return acc;
          }, {})
        );
        this.cakeSelect = cakeSelect;
        this.presentProcedure = 2;
        console.log(cakeSelect, "转化数据");
      }
       //6.
      for (let item of this.cakeSelect) {
        if (item.selectId == "cakebase" || item.selectId == "caKeUp") {
          this.$set(item, "curItem", item.selectList[0]);
          this.$set(item, "curSelectIndex", 0);
        }
      }
      //模型数据初始化时候加载glb数据
      this.initEvent(a);
    },
    beforeDestroy: function () {},
  };
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .aggregate {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    border-top: 1px solid #fff;
  }
  .changeModels {
    position: absolute;
    top: 10%;
    left: 20%;
  }
  
  .finalStatement {
    position: absolute;
    top: 1%;
    width: 37%;
    height: 94%;
    right: 16%;
    background: url(http://localhost:8080/img/tc-shul.3b482638.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 33px 25px;
    color: #fff;
  }
  .topTitles1 {
    display: flex;
    width: 100%;
    justify-content: center;
    font-weight: 600;
  }
  .finalStatement .table {
    margin-top: 6px;
    height: 91%;
  }
  .finalStatement .table .title {
    display: flex;
    padding: 5px 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-size: 15px;
  }
  .finalStatement .table .title p {
    width: 20%;
  }
  .finalStatement .table .title p:nth-child(1) {
    width: 60%;
  }
  .tableValues {
    height: 77%;
    box-sizing: border-box;
    padding: 7px 0;
    overflow-y: auto;
  }
  .tableValues .lines {
    display: flex;
    margin-bottom: 9px;
  }
  .tableValues .lines p {
    width: 20%;
  }
  .tableValues .lines p:nth-child(1) {
    width: 60%;
  }
  .saveMoneybox {
    color: #fff;
  }
  .saveMoneybox2 {
    position: absolute;
    bottom: 23%;
    right: 6%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .saveMoneybox p {
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 5;
  }
  .saveMoneybox img {
    width: 28px;
    height: 28px;
  }
  .closePop img {
    width: 38px;
    height: 38px;
    margin-top: 21px;
  }
  .outerUpBox {
    background: url(/src/assets/tc-kaij.png);
    background-size: 100% 100%;
    width: 29%;
    height: 54%;
  }
  .outerUpBox .p1 {
    color: #664525;
    font-weight: 700;
    font-size: 30px;
    margin-top: 9%;
    margin-left: 8%;
  }
  .outerUpBox .p2 {
    font-weight: 600;
    margin-left: 18%;
    margin-top: 9%;
  }
  .outerUpBox .middioup {
    display: flex;
    margin-top: 11%;
  }
  .outerUpBox .middioup .left {
    display: flex;
    flex-direction: column;
    width: 52%;
    margin-left: 11%;
    color: #fff;
  }
  .outerUpBox .middioup .left span:nth-child(1) {
    font-size: 13px;
    font-weight: 600;
  }
  .outerUpBox .middioup .left span:nth-child(2) {
    font-size: 10px;
    margin-top: 4px;
  }
  .outerUpBox .middioup .right {
    display: flex;
    flex-direction: column;
    width: 23%;
    margin-top: -3%;
  }
  .outerUpBox .middioup .right span:nth-child(1) {
    font-weight: 600;
    color: #963d3b;
    font-size: 22px;
  }
  .outerUpBox .middioup .right span:nth-child(2) {
    font-size: 10px;
  }
  .popUpGifl {
    position: absolute;
    top: 20%;
    right: 0;
    transform: translateY(-50%);
  }
  .popUpGifl img {
    width: 50px;
  }
  .payFor {
    position: absolute;
    right: 6%;
    top: 19%;
  
    border-radius: 50%;
  }
  .payFor img {
    width: 28px;
    height: 28px;
  }
  .whiteBack {
    background: #fff;
    border-radius: 10px;
  }
  .toShowElement {
    padding: 0 5px;
  }
  .nextModels {
    position: absolute;
    top: 32%;
    left: 5%;
    color: #fff;
    background-image: url("./../assets/xiayig-bj.png");
    background-size: 100% 100%;
    display: flex;
    padding: 4px 1px;
    width: 21%;
    align-items: center;
    justify-content: space-between;
  }
  .nextModels .text {
    color: #622904;
    writing-mode: vertical-rl;
    font-size: 12px;
    font-size: 600;
    margin-left: 3px;
  }
  .nextModels .left {
    border-left: 1px solid #fff;
    padding-left: 9px;
  }
  .nextModels .degress {
    font-size: 15px;
  }
  .nextModels img {
    width: 23px;
    height: 23px;
    margin-right: 10px;
  }
  .process p {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .shadValue {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .switchingEmission {
    position: absolute;
    bottom: 11%;
    right: 6.2%;
    display: flex;
    flex-direction: column;
    padding: 10px 7px;
    border: 1px solid #fff;
    border-radius: 20px;
    height: 20%;
    justify-content: space-between;
  }
  .switchingEmission img {
    width: 30px;
    height: 30px;
  }
  .featureBox {
    position: absolute;
    bottom: 45%;
    right: 6%;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .featureBox img {
    width: 28px;
    height: 28px;
  }
  .deleteBox {
    position: absolute;
    bottom: 8%;
    left: 27%;
    border: 1px dotted;
    width: 41%;
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .deleteBox img {
    width: 20px;
    height: 20px;
  }
  .penbox {
    height: 67% !important;
  }
  .activeItemSlect {
    background: url("./../assets/cp-xzbj.png") !important;
    background-size: 100% 100% !important;
    border: none !important;
  }
  
  .activeItemselectTit {
    color: #622904 !important;
  }
  .nextButton {
    position: absolute;
    bottom: 9%;
    right: 10%;
    color: #fff;
    background-image: url("./../assets/bgcd-bj.png");
    background-size: 100% 100%;
    padding: 12px 25px;
  }
  .toTwo {
    color: #fff;
  }
  .choseCake {
    position: absolute;
    top: 17%;
    left: 5%;
    width: 24%;
  
    height: 60%;
  }
  .leftCenter {
    justify-content: flex-start !important;
  }
  .curCakeSize {
    width: 97% !important;
    background-image: url(./../assets/ccbj-xz.png) !important;
    margin-left: -9px;
    height: 24% !important;
  }
  .choseCake p {
    width: 80%;
    height: 20%;
    background-image: url("./../assets/ccbj.png");
    color: #dedad5;
    margin-bottom: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
  }
  body,
  html {
    height: 100%;
    overflow: hidden;
  }
  .globalButton {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 25px 15px;
  }
  .globalButton p {
    margin-bottom: 17px;
    color: #fff;
    border-radius: 6px;
    padding: 3px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .globalButton p i {
    margin-right: 5px;
  }
  .globalButton img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  img {
    -webkit-touch-callout: none;
    pointer-events: none;
  }
  .alignLineBox {
    padding: 22px 20px;
    position: absolute;
    left: 21%;
    bottom: 13%;
    background: url(../assets/tc-shul.png);
    background-size: 100% 100%;
    color: #fff;
    border-radius: 15px;
    width: 22%;
  }
  .alignLineBox .bottom {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .alignLineBox .bottom .aliginItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .alignLineBox .bottom img {
    width: 28px;
    height: 28px;
  }
  .alignLineBox .top .aliginItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
    margin-right: 10px;
  }
  .alignLineBox .top {
    display: flex;
  }
  .rightArea .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0px;
  }
  .rightArea .top img {
    width: 15px;
    height: 20px;
  }
  .alignLineBox .top img {
    width: 28px;
    height: 28px;
    margin-bottom: 3px;
  }
  
  .rightArea .bottom {
    width: 100%;
  }
  .LowerRightArea {
    position: absolute;
    left: 4%;
    bottom: 7%;
    width: 20%;
    height: 30%;
  }
  .LowerRightArea img {
    width: 41px;
    height: 41px;
  }
  .locatOne {
    position: absolute;
    bottom: -4%;
    right: 36%;
  }
  .locatthree {
    position: absolute;
    bottom: 36%;
    right: 2%;
  }
  .locatFive {
    bottom: 12%;
    position: absolute;
    right: 12%;
    width: 45px !important;
    height: 45px !important;
  }
  .locatTwo {
    position: absolute;
    bottom: 85%;
    right: 36%;
  }
  .locatFour {
    position: absolute;
    bottom: 37%;
    right: 68%;
  }
  .rightArea {
    position: absolute;
    right: 6%;
    top: 61%;
    width: 5%;
    height: 27%;
    border: 1px solid #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .upperArea {
    position: absolute;
    top: 20px;
    right: 14%;
    display: flex;
  }
  .upperArea .left {
    padding: 3px 5px 3px;
    background: url("./../assets/bgcd-bj.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 15px;
  }
  .upperArea .right {
    width: 90px;
    height: 38px;
    background: url("./../assets/bgcd-bj.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .upperArea img {
    width: 28px;
    height: 28px;
  }
  .shadowBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
  .popUpBox {
    position: absolute;
    right: 0;
    height: 100%;
    width: 23%;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
  }
  .showPopList {
    margin-bottom: 10px;
    display: flex;
  }
  .showPopList img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 5px;
  }
  .currtitle {
    color: #fff;
    font-weight: 600;
    background: url("./../assets/xpdweibj.png") no-repeat;
    background-size: 100% 100%;
  }
  .elementBox {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .middioBox {
    position: absolute;
    top: 16%;
    right: 28%;
    width: 29%;
    height: 70%;
    background: #322a22;
    border-radius: 10px;
    display: flex;
    color: #fff;
    background: url("./../assets/xuanpinkk.png") no-repeat;
    background-size: 100% 100%;
    backdrop-filter: blur(10px);
  }
  .elementItemBox {
    width: 72%;
    box-sizing: border-box;
    height: 81%;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 11%;
    margin-left: 9%;
  }
  .elementItems:nth-child(n) {
    margin-right: 3%;
    margin-left: 3%;
  }
  .elementItems img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-top: 8px;
  }
  .elementItems {
    width: 43%;
    height: 37%;
    border-radius: 8px;
    border: 1px dotted #fff;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 5px;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
  }
  .elementItems p {
    font-size: 11px;
    max-width: 90%;
    margin: 3px auto;
    overflow: hidden;
    white-space: nowrap;
  }
  .elementItem {
    writing-mode: vertical-rl; /* 竖排文字，从右到左 */
    text-orientation: upright; /* 文字直立 */
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .elementTitBox {
    width: 14%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 92%;
    overflow-y: auto;
    margin-top: 3.5%;
  }
  
  .leftOperCountent {
    position: absolute;
    left: 40%;
    border-radius: 10px;
    bottom: 3%;
    background: url("./../assets/dgczbj.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 6px 10px 4px;
    display: flex;
    color: #fff;
  }
  .leftOperCountent img {
    width: 28px;
    height: 28px;
  }
  .leftOperCountent .left {
    padding-right: 10px;
    border-right: 1px solid #fff;
  }
  .leftOperCountent .right {
    padding-left: 10px;
    display: flex;
  }
  .leftOperCountent .right div {
    margin-right: 10px;
  }
  .leftOperCountent .right img:last-child {
    margin-right: 0;
  }
  .snapshootBox {
    position: absolute;
    left: 4.5%;
    top: 20px;
  }
  .snapItem {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    background: url("./../assets/shitu-bj.png");
    background-size: 100% 100%;
  }
  #app {
    position: relative;
  }
  #control button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  
    background-color: #3498db;
  }
  
  #control {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #f3f3f3;
    border-radius: 30px;
  }
  
  #RockerBorder {
    position: absolute;
    left: 8.5%;
    bottom: 10%;
    display: inline-block;
    width: 100px;
    height: 100px;
  
    border-radius: 50%;
    background: url("./../assets/yaogan-fx.png") no-repeat;
    background-size: 100% 100%;
  }
  
  #Rocke {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
    background: url("./../assets/yaogan.png") no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
  }
  
  button {
    background: none;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .bgimggif {
    background: url("../../public/images/jinbo.gif") no-repeat;
    background-size: 100% 100%;
  }
  
  .title {
    height: 20px;
  }
  
  .selectList {
    padding: 10px 2px;
    box-sizing: border-box;
  }
  .cakeimg {
    border-radius: 5px;
  }
  
  .selectList img {
    width: 20%;
    height: 40px;
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    vertical-align: middle;
  }
  
  #webgldis {
    position: absolute;
    width: 195px;
    left: 7px;
  }
  .set0 {
    top: -50% !important;
  }
  #webgl {
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url("../assets/bgcake.png");
    background-size: 100% 100%;
  }
  
  .dix {
    display: inline-block;
    /* width: 85%;
    height: 1000px;
    vertical-align: middle; */
    /*    position: absolute;
     top: 0cm; */
  }
  
  .dixxxxx {
    display: inline-block;
    width: 85%;
    height: 1000px;
    vertical-align: middle;
    position: absolute;
    top: 0cm;
    z-index: -100;
  }
  .rightcenter {
    right: 4%;
  }
  .quitwess {
    position: absolute;
    top: 8%;
    left: 5%;
  }
  .quitwess img {
    width: 30px;
    height: 30px;
  }
  .showModelValueChange {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    z-index: 999;
    position: absolute;
    top: 30%;
    left: 0%;
    width: 300px;
  }
  .showFill {
    background-image: url(/src/assets/lb-qdan.png);
    background-size: 100% 100%;
    border-radius: 10px;
    z-index: 999;
    position: absolute;
    top: 15%;
    right: 1%;
    width: 24%;
    height: 64%;
  
    padding: 20px;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
  }
  .fillItem {
    width: 21%;
    height: 18%;
    display: inline-block;
    background: rgba(230, 230, 230, 0.2);
    border-radius: 10px 10px 10px 10px;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 9px;
  }
  .fillItem img {
    width: 100%;
    height: 100%;
  }
  </style>
  