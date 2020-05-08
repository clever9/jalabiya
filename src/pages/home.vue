<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <!-- <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>jalabiya</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>jalabiya</f7-nav-title-large>
    </f7-navbar> -->
    
<!-- show tabs if lang en -->
<f7-views tabs class="safe-areas">
  <f7-toolbar v-if="lang == 'ar'" tabbar bottom style="height: 85px;padding: 15px 0px;font-family: cairo">
    <f7-link tab-link="#tab-5" style="padding: 0px 5px;margin: 2px">
      <i class="f7-icons">person_fill</i>
      <span>حسابي</span>
    </f7-link>
    <f7-link tab-link="#tab-4" style="padding: 0px 20px;margin: 2px">
      <i class="f7-icons">question_circle_fill</i>
      <span>خدمة العملاء</span>
    </f7-link>
    <f7-link tab-link="#tab-3" style="padding: 0px 20px;margin: 2px">
      <i class="f7-icons">bag_fill</i>
      <span>سلة المشتريات</span>
    </f7-link>
    <f7-link tab-link="#tab-2" style="padding: 0px 10px;margin: 2px">
      <i class="f7-icons">rectangle_grid_2x2_fill</i>
      <span>الأصناف</span>
    </f7-link>
    <f7-link tab-link="#tab-1" @click="setHome"  tab-link-active style="padding: 0px 10px;margin: 2px">
      <i class="f7-icons">house</i>
      <span>الرئيسية</span>
    </f7-link>
  </f7-toolbar>

    <!-- show tabs if lang en -->
    <f7-toolbar v-if="lang == 'en'" tabbar bottom style="height: 85px;padding: 15px 0px;font-family: cairo">
    <f7-link tab-link="#tab-1" @click="setHome"  tab-link-active style="padding: 0px 5px;margin: 2px">
      <i class="f7-icons">house</i>
      <span style="text-transform: capitalize">Home</span>
    </f7-link>
    <f7-link tab-link="#tab-4" style="padding: 0px 15px;margin: 2px">
      <i class="f7-icons">rectangle_grid_2x2_fill</i>
      <span style="text-transform: capitalize">Categories</span>
    </f7-link>
    <f7-link tab-link="#tab-3" style="padding: 0px 5px;margin: 2px">
      <i class="f7-icons">bag_fill</i>
      <span style="text-transform: capitalize">My Cart</span>
    </f7-link>
    <f7-link tab-link="#tab-2" style="padding: 0px 10px;margin: 2px">
      <i class="f7-icons">question_circle_fill</i>
      <span style="text-transform: capitalize">Help</span>
    </f7-link>
    <f7-link tab-link="#tab-5"  style="padding: 0px 20px;margin: 2px">
      <i class="f7-icons">person_fill</i>
      <span style="text-transform: capitalize">My Account</span>
    </f7-link>
  </f7-toolbar>

  <!-- <f7-view id="tab-1" main tab tab-active url="/"></f7-view>
  <f7-view id="tab-2" name="tab-2" tab url="/about/"></f7-view>
  <f7-view id="tab-3" name="tab-3" tab url="/home/"></f7-view>
  <f7-view id="tab-4" name="tab-4" tab url="/form/"></f7-view>
  <f7-view id="tab-5" name="tab-5" tab url="/form/"></f7-view> -->
  <f7-tabs animated>
    <!-- Home View -->
    <f7-tab id="tab-1"  class="page page-content" tab-active style="background-color: #eee; font-family: cairo">
      <f7-navbar fill  style="padding: 15px;position: fixed" v-if="lang == 'ar'" no-hairline no-shadow>
        <f7-nav-left>
          <i style="font-size: 20px;margin: 0px 15px;color: #af9a82" class="link f7-icons">search</i>
        </f7-nav-left>
        <f7-nav-title style="font-size: 23px; font-family: cairo-bold;color: #af9a82">جلابية</f7-nav-title>
        <f7-nav-right>
          <!-- <f7-link icon="home"></f7-link> -->
          <i style="margin: 0px 15px"></i>
        </f7-nav-right>
      </f7-navbar>
      <f7-navbar v-if="lang == 'en'" style="position: fixed"  no-hairline no-shadow class="nav-bg">
        <f7-nav-left>
          <!-- <f7-link icon="home"></f7-link> -->
          <i style="margin: 0px 15px"></i>
        </f7-nav-left>
        <f7-nav-title style="text-align: center; font-size: 23px; font-family: cairo-bold;color: #af9a82">Jalabiya</f7-nav-title>
        <f7-nav-right>
           <i style="color: grey;font-size: 20px;margin: 0px 15px" class="link f7-icons">search</i>
        </f7-nav-right>
      </f7-navbar>

      <div style="background-color: white;margin: 0px 0px 15%">
        <img src="/static/sales.PNG" style="width: 100%"/>
        <div style="position: relative">
          <img src="/static/shopping.PNG" style="width: 100%"/>
          <div style="width: 35%;position: absolute; bottom: 40px; right: 30px; text-transform: capitalize;background-color: rgba(255,0,0,.6);border-radius: 30px" class="link"><p style="color: white;text-align: center;font-family: cairo-bold">تسوق الآن</p></div>
        </div>
        <div style="height: 5px;background-color: #eee"></div>
         <span dir="rtl" class="row" style="background-color: #eee;padding: 5px">
            <div v-for="item in ['https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90668593_2447190028716394_8288829802860055621_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=RHj8iAzKy7gAX80SNIP&oh=e87ad10b89f95e33ffdade9af1dd9a06&oe=5ED41888','https://pbs.twimg.com/media/EWiQH1fXkAAS-8D.jpg','https://www.radhedesigner.com/content/images/thumbs/0002118_new-ladies-maxi-dress-jilbab-abaya-takchita-caftan-thobe-wedding-gown-fancy_550.jpeg','https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.101.810.810a/s640x640/79686279_168754777551630_6482472307602809273_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=wf5Esc_1UPgAX9M0Ke5&oh=8f583e2b570962b325aea8277579cbf8&oe=5EC44A8E','https://www.zayoshe.com/mediafiles/products/a7ca2c17-084b-44b9-8ce8-876b7625d8ac.jpg']" :key="item" class="col-50" style="margin:5px 0px; background-color: white;border-radius: 8px">
             <div style="position: relative;overflow: hidden">
              <img :data-src="item" class="lazy lazy-fade-in" width="100%" height="230" style="border-radius: 8px 8px 0px 0px"/>
              <p style="padding: 5px; background-color: rgba(255,0,0,0.5);position: absolute; top: 10px; left:-50px;z-index: 12px;text-align: center; font-family: cairo-bold;color: white;transform: rotate(-40deg);width: 100%">نفذت الكمية</p>
             </div>  
              <div class="row" >
                <div style="font-family: cairo-bold; font-weight: bold; padding: 0px 10px;font-size: 15px">تصميم مميز <span style="color: gray;font-size: 12px; margin: 0px 4px">أرزق غامق</span></div>
              </div>
              <div style="margin: 7px 0px">
                  <a class="link" v-for="size in ['S', 'M', 'L', 'XL', '2XL']" :key="size" style="width: 25px; height: 25px; margin: 0px 2px;text-align: center; background-color: #eee;padding: 3px;border-radius: 4px">{{size}}</a>
              </div>
              <div dir="rtl" class="row" style="margin: 5% 5px">
                <div class="col-30">
                  <img src="/static/multi.png" style="margin: 10px 0px" width="30" height="30"/>
                </div>
                <div clss="col-70">
                  <div class="row">
                    <div style="margin: 0px 7px;text-align: left">
                      <span style="font-family: cairo-bold;color: #d1d6d6">ريال</span><br>
                      <span style="font-family: cairo-bold; font-size: 20px;text-decoration: line-through;color: #d1d6d6">200</span>
                    </div>
                    <div style="margin: 0px 7px;text-align: left">
                      <span style="font-family: cairo-bold;color: #6a767a">ريال</span><br>
                      <span style="font-family: cairo-bold; font-size: 20px;color: #FF756B">120</span>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
         </span>
         <div style="padding: 10px 5px 0px;background-color: #eee">
           <f7-button round large fill  style="background-color: #af9a82"><span style="font-family: cairo-bold">مشاهدة المزيد</span></f7-button>
         </div>


      </div>

      <!-- <f7-block>
        {{this.lang == 'ar' ? 'Arabic' : 'English'}}
        <f7-button large raised style="background-color: blue" fill @click="changeToAr">Change To عربي</f7-button>
        <br>
        <f7-button large raised style="background-color: blue" fill @click="changeToEn">Change To English</f7-button>
      </f7-block> -->
    </f7-tab>
    <!-- End of Home View -->

    <!-- Start of Categories View -->
    <f7-tab id="tab-2"  class="page-content" style="background-color: #eee;position: relative" >

        <!-- <f7-navbar fill  style="padding: 15px;position: absolute; top: 0px" v-if="lang == 'ar'" no-hairline no-shadow>
          <f7-nav-left>
            <i style="color: grey;font-size: 20px;margin: 0px 15px;color: #af9a82" class="link f7-icons">arrow_up_arrow_down</i>
          </f7-nav-left>
          <f7-nav-title style="font-size: 23px; font-family: cairo-bold;color: #af9a82">الأصناف</f7-nav-title>
          <f7-nav-right>
            <i style="margin: 0px 15px"></i>
          </f7-nav-right>
        </f7-navbar> -->

        <div  style="position: fixed;top: 0px;padding: 5px;z-index:100;background-color: white;width: 100%;max-height: 50px">
          <div class="row" style="width: 90%">
          <div class="col-30">
            <i style="font-size: 26px;margin: 15px;color: #333;font-weight: bold" class="link f7-icons">arrow_up_arrow_down</i>
          </div>
          <div ></div>
          <div class="col-30">
            <div style="text-align:center;font-family: cairo-bold;font-size: 25px;margin: 15px;">الأصناف</div>
          </div>
          </div>
        </div>
        <div  style="position: fixed;top: 51px;padding: 14px 5px;z-index:100;background-color: white;width: 100%;max-height: 60px">
          <div class="row" style="width: 93%;margin: 0px auto">
                <div class="scrollChips">
                  <div class="chip" style="background-color: #af9a82; color: white; margin: 0px 2.5px">
                    <!-- <f7-icon material="perm_identity" style="margin: 0px 3px"></f7-icon> -->
                    <div class="chip-label" style="color: white;font-family: cairo-bold" >الكل</div>
                  </div>
                  <div class="chip" style="background-color: #d1d6d6; color: white; margin: 0px 2.5px">
                    <!-- <f7-icon material="contacts" style="margin: 0px 3px"></f7-icon> -->
                    <div class="chip-label" style="color: white;font-family: cairo-bold">جلابيات سعودية</div>
                  </div>
                  <div class="chip chip-outline" style="background-color: #d1d6d6; color: white; margin: 0px 2.5px">
                    <!-- <f7-icon material="mic_none" style="margin: 0px 3px"></f7-icon> -->
                    <div class="chip-label" style="color: white;font-family: cairo-bold">جلابيات كويتية</div>
                  </div>
                  <div class="chip" style="background-color: #d1d6d6; color: white; margin: 0px 2.5px">
                    <!-- <f7-icon material="code" style="margin: 0px 3px"></f7-icon> -->
                    <div class="chip-label" style="color: white;font-family: cairo-bold">جلابيات اماراتية</div>
                  </div>
                  <div class="chip" style="background-color: #d1d6d6; color: white; margin: 0px 2.5px">
                    <!-- <f7-icon material="mic_none" style="margin: 0px 3px"></f7-icon> -->
                    <div class="chip-label" style="color: white;font-family: cairo-bold">جلابيات عمانية</div>
                  </div>
                </div>
          <!-- <div class="col-30">
            <i style="font-size: 26px;margin: 15px;color: #af9a82" class="link f7-icons">search</i>
          </div>
          <div ></div>
          <div class="col-30">
            <div style="text-align:center;font-family: cairo-bold;font-size: 25px;margin: 15px;">الأصناف</div>
          </div> -->
          </div>
        </div>


        <div style="background-color: white;margin: 29% 0px 15%;">
        <div style="height: 5px;background-color: #eee"></div>
         <span dir="rtl" class="row" style="background-color: #eee;padding: 5px">
            <div v-for="item in ['https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90668593_2447190028716394_8288829802860055621_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=RHj8iAzKy7gAX80SNIP&oh=e87ad10b89f95e33ffdade9af1dd9a06&oe=5ED41888','https://pbs.twimg.com/media/EWiQH1fXkAAS-8D.jpg','https://www.radhedesigner.com/content/images/thumbs/0002118_new-ladies-maxi-dress-jilbab-abaya-takchita-caftan-thobe-wedding-gown-fancy_550.jpeg','https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.101.810.810a/s640x640/79686279_168754777551630_6482472307602809273_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=wf5Esc_1UPgAX9M0Ke5&oh=8f583e2b570962b325aea8277579cbf8&oe=5EC44A8E','https://www.zayoshe.com/mediafiles/products/a7ca2c17-084b-44b9-8ce8-876b7625d8ac.jpg']" :key="item" class="col-50" style="margin:5px 0px; background-color: white;border-radius: 8px">
             <div style="position: relative;overflow: hidden">
              <img :data-src="item" class="lazy lazy-fade-in" width="100%" height="230" style="border-radius: 8px 8px 0px 0px"/>
              <p style="padding: 5px; background-color: rgba(255,0,0,0.5);position: absolute; top: 10px; left:-50px;z-index: 12px;text-align: center; font-family: cairo-bold;color: white;transform: rotate(-40deg);width: 100%">نفذت الكمية</p>
             </div>  
              <div class="row" >
                <div style="font-family: cairo-bold; font-weight: bold; padding: 0px 10px;font-size: 15px">تصميم مميز <span style="color: gray;font-size: 12px; margin: 0px 4px">أرزق غامق</span></div>
              </div>
              <div style="margin: 7px 0px">
                  <a class="link" v-for="size in ['S', 'M', 'L', 'XL', '2XL']" :key="size" style="width: 25px; height: 25px; margin: 0px 2px;text-align: center; background-color: #eee;padding: 3px;border-radius: 4px">{{size}}</a>
              </div>
              <div dir="rtl" class="row" style="margin: 5% 5px">
                <div class="col-30">
                  <img src="/static/multi.png" style="margin: 10px 0px" width="30" height="30"/>
                </div>
                <div clss="col-70">
                  <div class="row">
                    <div style="margin: 0px 7px;text-align: left">
                      <span style="font-family: cairo-bold;color: #d1d6d6">ريال</span><br>
                      <span style="font-family: cairo-bold; font-size: 20px;text-decoration: line-through;color: #d1d6d6">200</span>
                    </div>
                    <div style="margin: 0px 7px;text-align: left">
                      <span style="font-family: cairo-bold;color: #6a767a">ريال</span><br>
                      <span style="font-family: cairo-bold; font-size: 20px;color: #FF756B">120</span>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
         </span>
         <!-- <div style="padding: 10px 5px 0px;background-color: #eee">
           <f7-button round large fill  style="background-color: #af9a82"><span style="font-family: cairo-bold">مشاهدة المزيد</span></f7-button>
         </div> -->


      </div>

    </f7-tab>
    <!-- End of Categories View -->

    <!-- Start Of Cart View -->
    <f7-tab id="tab-3" class="page-content" style="background-color: #fff">
        <div  style="position: fixed;top: 0px;padding: 5px;z-index:100;background-color: white;width: 100%">
          <div class="row" style="width: 100%">
          <!-- <div class="col-20">
            <i style="font-size: 26px;margin: 15px;color: #333;font-weight: bold" class="link f7-icons">arrow_up_arrow_down</i>
          </div> -->
          <div class="col-100"  style="text-align:center;font-family: cairo-bold;font-size: 20px;margin: 5px;">سلة المشتريات</div>
          <!-- <div class="col-20">
              <i style="font-size: 20px;margin:5px;color: #333;font-weight: bold; text-align: center" class="link f7-icons">arrow_up_arrow_down</i>
          </div> -->
          </div>
        </div>


        <div style="background-color: white;margin: 15% 0px 15%;padding: 40% 0%">
        <div style="padding:auto 0px;text-align: center">
          <i style="font-size: 90px;margin:color: #333;font-weight: bold; text-align: center;color: lightgray" class="link f7-icons">bag_fill</i>
          <p style="font-size: 20px; font-family: cairo">سلة التسوق فارغة</p>
        </div>
         <!-- <div style="padding: 10px 5px 0px;background-color: #eee">
           <f7-button round large fill  style="background-color: #af9a82"><span style="font-family: cairo-bold">مشاهدة المزيد</span></f7-button>
         </div> -->


      </div>
    </f7-tab>
    <!-- End Of Cart View -->
    <!-- Start Of Customer Service -->
    <f7-tab id="tab-4" class="page-content" style="background-color: #eee;padding: 0px 0px 30%">
      <div style="padding: 10px;background-color: #fff" class="row">
        <div class="col-50" style="text-align: center">
          <img src="/static/contact-us.jpg" width="150" height="150"/>
        </div>
        <div class="col-50" style="margin: auto 0px">
          <h3  style="text-align: right;font-family:cairo-bold;font-size: 19px;line-height: 3px;color: #333">مركز المساعدة</h3>
          <p style="text-align: right;font-family: cairo;font-size: 16px">يرجى التواصل معنا, وسنكون سعداء بمساعدتك</p>
        </div>
      </div>
      <div style="height: 6px"></div>
      <div style="background-color: #fff">
        <div style="padding: 8px; text-align: right;font-family: cairo-bold;color: gray">
          اضغط للتواصل عبر الواتساب
        </div>
        <div style="height: 2px;background-color: #eee"></div>
        <div style="text-align: center;padding: 10px">
          <img src="/static/whatsapp.png"/>
          <p style="font-family: cairo;line-height: 1px">+966550492886</p>
        </div>
      </div>
      <div style="height: 6px"></div>
      <div style="background-color: #fff;padding: 15px">
        <div style="text-align: right">
          <p style="font-size: 18px;font-family: cairo-bold;line-height: 1px">خدمة العملاء</p>
          <p style="font-size: 17px;font-family: cairo">s33d-clever@hotmail.com</p>
        </div>
        <br>
        <div style="text-align: right">
          <p style="font-size: 18px;font-family: cairo-bold;line-height: 1px">مقرنا</p>
          <p style="font-size: 15px;font-family: cairo">الرياض, العليا</p>
          <p style="font-size: 15px;font-family: cairo;line-height:2px">المملكة العربية السعودية - 33215</p>
        </div>
        <br>
        <div style="text-align: right">
          <p style="font-size: 18px;font-family: cairo-bold;line-height: 1px">ساعات العمل</p>
          <p style="font-size: 15px;font-family: cairo">من الساعة 10 ص إلى 5 م</p>
          <p style="font-size: 15px;font-family: cairo;line-height:2px">(من السبت إلى الخميس)</p>
        </div>
      </div>
      <div style="height: 6px"></div>
      <div style="background-color: #fff">
        <div style="padding: 8px; text-align: right;font-family: cairo-bold">
          <p>الأسئلة الشائعة</p>
        </div>
        <div style="height: 2px;background-color: #eee"></div>
        <div style="">
          <f7-accordion-item v-for="n in 10" :key="n">
            <f7-accordion-toggle>
              <div class="row" style="padding: 5px 8px" dir="rtl">
                <div class="col-90"><p style="font-family: cairo-bold">السؤال رقم {{n}}</p></div>
                <div class="col-10" style="padding: 15px;"><i style="color: #333;font-size: 18px;text-align: center" class="link f7-icons">chevron_down</i></div>
              </div>
            </f7-accordion-toggle>
            <f7-accordion-content>
                <div style="font-family: cairo;padding: 8px 15px; text-align: justify;background-color: #eee" dir="rtl">
                  جواب السؤال {{n}}
                </div>
            </f7-accordion-content>
          </f7-accordion-item>
        </div>
      </div>
    </f7-tab>
    <!-- End Of Customer -->
    <!-- Start Of Account -->
    <f7-tab id="tab-5" class="page-content" style="background-color: #eee;padding: 0px 0px 30%">
      <div class="curved">
        <!-- <div> -->
          <img src="/static/logo.PNG" width="90" height="90" style="margin: 8% 0px;border-radius: 50%" />
          <p style="color: #fff;line-height: 0px;font-size: 24px;font-family: cairo">مريم إبراهيم</p>
          <p style="color: #fff;line-height: 20px;font-size: 20px;font-family: cairo">mi@icloud.apple.com</p>
        <!-- </div> -->
      </div>
      <div>
        <p style="font-family: cairo-bold;text-align: center;font-size: 17px">زائر</p>
        <div class="row">
          <div class="col-40" style="background-color: #fff;margin: 0px auto;border-radius: 15px">
            <div class="row link" style="text-align: center">
              <div class="col-50">
                <img src="/static/lang.png" width="40" height="40" style="margin: 10px 0px;tint-color: #fff" />
              </div>
              <div class="col-50" >
                <p style="font-size: 18px;font-family: cairo">العربية</p>
              </div>
            </div>
          </div>
          <div class="col-60" style="text-align: right;">
              <div styl="relative">
                  <p style="font-size: 26px;margin: auto 10px;font-family: cairo-bold;line-height: 50px;color: gray"><span style="font-size: 40px;color: #af9a82">200</span> ريال</p>
              </div>
          </div>
        </div>

      <!-- Icons -->
      <div class="row" style="margin: 20px 0px 0px">
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">link</i>
            </div>
            <p>شارك التطبيق</p>
        </div> 
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">heart_fill</i>
            </div>
            <p>المفضلة</p>
        </div>      
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">placemark_fill</i>
            </div>
            <p>عناويني</p>
        </div>       
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">tray_full_fill</i>
            </div>
            <p>طلباتي</p>
        </div> 
      </div>
      <div class="row" style="margin: 10px 0px 0px">
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">doc_text_fill</i>
            </div>
            <p>الشروط والأحكام</p>
        </div> 
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">gobackward</i>
            </div>
            <p>الإسترجاع و الإستبدال</p>
        </div>      
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">car_fill</i>
            </div>
            <p>الشحن و التوصيل</p>
        </div>       
        <div class="col-25" style="margin: 0px auto;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">creditcard_fill</i>
            </div>
            <p>طرق الدفع</p>
        </div> 
      </div>
      <div class="row" style="margin: 10px 0px 0px" dir="rtl">
        <div class="col-25" style="margin: 0px 10px;text-align: center;font-family: cairo">
            <div style="width: 60px;height: 60px;background-color: #fff;margin: 0px auto;border-radius: 5px">
              <i class="f7-icons" style="margin: 15px 0px;color: gray">lock_shield_fill</i>
            </div>
            <p>سياسة الخصوصية</p>
        </div> 
      </div>
      <f7-button fill round large style="font-family: cairo;margin: 0px 10px" login-screen-open="#login-view">
        تسجيل الدخول
      </f7-button>
      </div>
    </f7-tab>
    <!-- End Of Account -->
  </f7-tabs>
</f7-views>
  </f7-page>
</template>

<script>
import appEvents, {getLanguage} from '../js/events';

export default {
  data(){
    return {
      lang: getLanguage(),
      isLoading: true
    }
  },
  methods: {
    setHome: function(){
     this.$f7.preloader.show();
      setTimeout(() => {
        this.$f7.preloader.hide();
      }, 2000);
      // window.location.reload();
    },
    changeToAr: function() {
      appEvents.emit('languageChanged', 'ar')
      this.lang = 'ar'
    },
    changeToEn: function() {
      appEvents.emit('languageChanged', 'en')
      this.lang = 'en'
    },
  }
}
</script>
<style>

.curved {
  position: relative;
  /* background: #2c3e50; */
  background-image: url(/static/bg-account.jpg);
  background-size: cover;
  /* height: 38%; */
  padding: 1px;
  text-align: center;
  border-bottom-left-radius: 100% 100%;
  border-bottom-right-radius: 100% 100%;
}

</style>