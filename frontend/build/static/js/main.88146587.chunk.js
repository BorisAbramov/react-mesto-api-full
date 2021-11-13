(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),o=(n(18),n(2)),r=n(25),u=n(3),l=n(21),d=n(22),p=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(d.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"updateDataUser",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(e){return n._checkStatus(e)}))}},{key:"updateUserAvatar",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"likeCard",value:function(e,t,n){var a=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(n)}}).then((function(e){return a._checkStatus(e)}))}}]),e}())({baseUrl:"https://api.mesto-full.nomoredomains.work"}),j=c.a.createContext(),b=n(0),m=function(e){var t=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,s=e.card,i=Object(a.useContext)(j).currentUser,o=s.likes.some((function(e){return e._id===i._id})),r=s.owner._id===i._id,u="list__like ".concat(o?"list__like_active":""),l="list__basket ".concat(r?"":"list__basket_inactive");return Object(b.jsxs)("li",{className:"list__element",children:[Object(b.jsx)("img",{src:s&&s.link,alt:s&&s.name,className:"list__image",onClick:function(){t(s)}}),Object(b.jsxs)("div",{className:"list__group",children:[Object(b.jsx)("h2",{className:"list__name",children:s&&s.name}),Object(b.jsx)("button",{className:u,type:"button","aria-label":"Like",onClick:function(){n(s)},children:Object(b.jsx)("p",{className:"list__likes-counter",children:s.likes?s.likes.length:"0"})}),Object(b.jsx)("button",{className:l,type:"button","aria-label":"delete image",onClick:function(){c(s)}})]})]})},O=n.p+"static/media/header-logo.bbe2a6ea.svg",h=n(9),f=function(e){var t=e.buttonText,n=e.userEmail,c=e.endPoint,s=e.signOut,i=Object(a.useContext)(j),o=i.isBurgerMenuOpen,r=i.setIsBurgerMenuOpen;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(h.c,{to:"/main",className:"logo",children:Object(b.jsx)("img",{src:O,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(b.jsx)("div",{className:"header__burger ".concat(o?"active":""),onClick:function(){o?(r(!1),console.log(o)):(r(!0),console.log(o))},children:Object(b.jsx)("span",{className:"header__burger_span ".concat(o?"active":"")})}),Object(b.jsxs)("div",{className:"header__menu ".concat(o?"active":""),children:[n&&Object(b.jsx)("p",{className:"header__item ".concat(o?"active":""),children:n}),Object(b.jsx)("p",{className:"header__item ".concat(o?"active":""),children:Object(b.jsx)(h.c,{className:"header__link",to:c,onClick:s,children:t})})]})]})},_=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){var t=e.onAddPlace,n=e.onCardClick,c=e.onEditAvatar,s=e.onEditProfile,i=e.cards,o=e.onLikeClick,r=e.onDeleteClick,u=e.signOut,l=e.userEmail,d=Object(a.useContext)(j).currentUser;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{userEmail:l,buttonText:"\u0412\u044b\u0439\u0442\u0438",endPoint:"/sign-in",signOut:u}),Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsx)("button",{type:"button","aria-label":"profile__avatar",className:"profile__avatar",style:{backgroundImage:"url(".concat(d.avatar,")")},onClick:c}),Object(b.jsxs)("div",{className:"profile-info",children:[Object(b.jsx)("h1",{className:"profile-info__name",id:"name",children:d.name}),Object(b.jsx)("button",{className:"profile-info__edit",type:"button","aria-label":"Edit",onClick:s}),Object(b.jsx)("p",{className:"profile-info__text",id:"job",children:d.about})]}),Object(b.jsx)("button",{type:"button",className:"profile__add","aria-label":"add profile",onClick:t})]}),Object(b.jsx)("section",{className:"elements",children:Object(b.jsx)("ul",{className:"list",children:i.map((function(e){return Object(b.jsx)(m,{card:e,onCardClick:n,onCardLike:o,onCardDelete:r},e._id)}))})})]}),Object(b.jsx)(_,{})]})},x=function(e){var t=e.isOpen,n=e.onClose,a=e.data;return Object(b.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_is-opened":""),children:Object(b.jsxs)("div",{className:"popup__content popup__content_image",id:"picture-popup",onClick:n,children:[Object(b.jsx)("button",{className:"popup__close",type:"button","aria-label":"close popupImage",onClick:n}),Object(b.jsx)("img",{src:a&&a.link,alt:a&&a.name,className:"popup__imgPic"}),Object(b.jsx)("h3",{className:"popup__imgText",children:a&&a.name})]})})};var v=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,s=e.onSubmit,i=e.children,o=e.button,r=e.idSubmitted;return Object(b.jsx)("div",{className:"popup ".concat(a?"popup_is-opened":""),id:"edit-".concat(t),onClick:c,children:Object(b.jsxs)("div",{className:"popup__content",children:[Object(b.jsx)("button",{type:"button","aria-label":"close popup",className:"popup__close",onClick:c}),Object(b.jsx)("h3",{className:"popup__title",children:n}),Object(b.jsxs)("form",{action:"#",id:"".concat(t),name:"".concat(t),className:"popup__form",onSubmit:s,children:[i,Object(b.jsx)("button",{"aria-label":"submit form",className:"popup__submit popup__submit_disabled",type:"submit",disabled:r,children:o})]})]})})},C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.isSubmitted,i=Object(a.useRef)("");return Object(b.jsx)(v,{name:"user-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||(c({avatar:i.current.value}),i.current.value="")},idSubmitted:s,children:Object(b.jsxs)("label",{className:"popup__field",htmlFor:"avatar-link-input",children:[Object(b.jsx)("input",{ref:i,type:"url",className:"popup__input",id:"avatar-link-input",name:"avatarLinkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",required:!0}),Object(b.jsx)("span",{className:"form__input-error",id:"avatar-link-input-error"})]})})},S=function(e){return Object(b.jsxs)("label",{className:"popup__field",htmlFor:"".concat(e.id,"-input"),children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({},e),{},{className:"popup__input",id:"".concat(e.id,"-input")})),Object(b.jsx)("span",{className:"popup__input-error",id:"".concat(e.id,"-input-error")})]})},k=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=e.isSubmitted,i=Object(a.useContext)(j).currentUser,o=Object(a.useState)(""),r=Object(u.a)(o,2),l=r[0],d=r[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),O=m[0],h=m[1];Object(a.useEffect)((function(){d(i.name),h(i.about)}),[i,t]);return Object(b.jsxs)(v,{name:"user-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||c({name:l,about:O})},idSubmitted:s,children:[Object(b.jsx)(S,{type:"text",value:l||"",id:"user-name",name:"userNameInput",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",minLength:"2",onChange:function(e){d(e.target.value)}}),Object(b.jsx)(S,{type:"text",value:O||"",id:"user-job",name:"userNameInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,maxLength:"200",minLength:"2",onChange:function(e){h(e.target.value)}})]})},N=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.isSubmitted,i=Object(a.useState)(""),o=Object(u.a)(i,2),r=o[0],l=o[1],d=Object(a.useState)(""),p=Object(u.a)(d,2),j=p[0],m=p[1];Object(a.useEffect)((function(){s||(l(""),m(""))}),[s]);return Object(b.jsxs)(v,{name:"user-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||c({name:r,link:j})},idSubmitted:s,children:[Object(b.jsx)(S,{type:"text",value:r||"",id:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeNameInput",required:!0,maxLength:"30",minLength:"2",onChange:function(e){l(e.target.value)}}),Object(b.jsx)(S,{type:"url",value:j||"",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeLinkInput",required:!0,onChange:function(e){m(e.target.value)}})]})},y=function(e){var t=e.isOpen,n=e.onClose,a=e.deleteCard,c=e.isSubmitted,s=e.data;return Object(b.jsx)(v,{name:"user-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||a(s)},idSubmitted:c})},T=n(4),w=n(11),U=function(e){var t=e.name,n=e.title,a=e.onSubmit,c=e.children,s=e.button,i=e.isSubmitted,o=e.userSignUp;return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("h2",{className:"login__title",children:n}),Object(b.jsxs)("form",{className:"login__form",id:"".concat(t),name:"".concat(t),autoComplete:"off",onSubmit:a,children:[c,Object(b.jsx)("button",{"arial-lable":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"submit",className:"login__submit ".concat(i?"login__submit_inactive":""),disabled:i,children:s}),o&&Object(b.jsx)("div",{className:"login__footer",children:Object(b.jsxs)("p",{className:"login__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(b.jsx)(h.b,{className:"login__subtitle login__link",to:"/sign-in",children:o})]})})]})]})},P=function(e){var t=e.handleLogin,n=e.isSubmitted,c=Object(a.useState)({email:"",password:""}),s=Object(u.a)(c,2),i=s[0],r=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},i),{},Object(w.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{buttonText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",endPoint:"/sign-up"}),Object(b.jsxs)(U,{name:"user-sign-in",title:"\u0412\u043e\u0439\u0442\u0438",button:n?"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434":"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault(),i.email&&i.password&&t(i.password,i.email)},isSubmitted:n,children:[Object(b.jsx)("input",{className:"login__input",type:"email",value:i.email,id:"email",placeholder:"Email",name:"email",required:!0,onChange:l}),Object(b.jsx)("input",{className:"login__input",type:"password",value:i.password,id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,onChange:l})]})]})},L=function(e){var t=e.handleRegister,n=e.isSubmitted,c=Object(a.useState)({email:"",password:"",confirmPassword:""}),s=Object(u.a)(c,2),i=s[0],r=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},i),{},Object(w.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{mix:"page__header section",buttonText:"\u0412\u043e\u0439\u0442\u0438",endPoint:"/sign-in"}),Object(b.jsxs)(U,{name:"user-sign-up",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:n?"\u0418\u0434\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){e.preventDefault(),i.password&&i.email&&t(i.email,i.password,i.confirmPassword)},userSignUp:"\u0412\u043e\u0439\u0442\u0438",isSubmitted:n,children:[Object(b.jsx)("input",{className:"login__input",type:"email",value:i.email,id:"email",name:"email",placeholder:"Email",colormodifier:"form__login-input",required:!0,minLength:"2",onChange:l}),Object(b.jsx)("input",{className:"login__input",type:"password",value:i.password,id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l}),Object(b.jsx)("input",{className:"login__input",type:"password",value:i.confirmPassword,id:"confirmPassword",name:"confirmPassword",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l})]})]})},E=n(26),I=["component"],D=function(e){var t=e.component,n=Object(E.a)(e,I),c=Object(a.useContext)(j).isLoggedIn;return Object(b.jsx)(T.b,{children:function(){return c?Object(b.jsx)(t,Object(o.a)({},n)):Object(b.jsx)(T.a,{to:n.to})}})},A=function(e){var t=e.isOpen,n=e.onClose,c=e.name,s=Object(a.useContext)(j),i=s.authUserData,o=s.isSignedUp;return Object(b.jsx)("section",{className:"popup ".concat(t?"popup_is-opened":""),id:"edit-".concat(c),onClick:n,children:Object(b.jsxs)("div",{className:"popup__content popup__content_size-s",children:[Object(b.jsx)("div",{className:"popup__icon ".concat(o?"popup__icon_status_ok":"popup__icon_status_err")}),Object(b.jsx)("h2",{className:"popup__title",children:i.message}),Object(b.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"popup__close",onClick:n})]})})},B="https://api.mesto-full.nomoredomains.work",q={"Content-Type":"application/json"},z=function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))};var F=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(u.a)(s,2),l=i[0],d=i[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),h=O[0],f=O[1],_=Object(a.useState)(!1),v=Object(u.a)(_,2),S=v[0],w=v[1],U=Object(a.useState)(!1),E=Object(u.a)(U,2),I=E[0],F=E[1],J=Object(a.useState)(!1),M=Object(u.a)(J,2),R=M[0],H=M[1],G=Object(a.useState)(null),K=Object(u.a)(G,2),Q=K[0],V=K[1],W=Object(a.useState)(!1),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)({}),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({}),ce=Object(u.a)(ae,2),se=ce[0],ie=ce[1],oe=Object(a.useState)(!1),re=Object(u.a)(oe,2),ue=re[0],le=re[1],de=Object(a.useState)(!1),pe=Object(u.a)(de,2),je=pe[0],be=pe[1],me=Object(a.useState)(!1),Oe=Object(u.a)(me,2),he=Oe[0],fe=Oe[1],_e=Object(a.useState)({}),ge=Object(u.a)(_e,2),xe=ge[0],ve=ge[1],Ce=Object(a.useState)({}),Se=Object(u.a)(Ce,2),ke=Se[0],Ne=Se[1],ye=Object(a.useState)(!1),Te=Object(u.a)(ye,2),we=Te[0],Ue=Te[1],Pe=Object(a.useState)(!1),Le=Object(u.a)(Pe,2),Ee=Le[0],Ie=Le[1],De=Object(T.g)();Object(a.useEffect)((function(){p.getInitialCards().then((function(e){c(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e.status," ").concat(e.statusText))}))}),[]),Object(a.useEffect)((function(){p.getUserInfo().then((function(e){ne(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))}),[]),Object(a.useEffect)((function(){Ae()}),[De]);var Ae=function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(B,"/users/me"),{method:"GET",headers:Object(o.a)(Object(o.a)({},q),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return z(e)}))}(e).then((function(e){var t=e.data;Ne(t.email),be(!0),De.push("/main")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:".concat(e)),De.push("/sign-in"),ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434 \u0441\u0432\u043e\u0435\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u044c\u044e"})),le(!0)}))},Be=function(e){d(!1),w(!1),f(!1),H(!1),le(!1)},qe=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&Be()},ze=function(e){27===e.keyCode&&Be()};return Object(a.useEffect)((function(){return(l||h||S||R||I)&&document.addEventListener("keydown",ze),function(){document.removeEventListener("keydown",ze)}}),[l,h,S,R,I]),Object(b.jsx)(j.Provider,{value:{currentUser:te,authUserData:xe,isLoggedIn:je,setIsShowPassword:Ue,isShowPassword:we,isSignedUp:he,isBurgerMenuOpen:Ee,setIsBurgerMenuOpen:Ie},children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsxs)(T.d,{children:[Object(b.jsx)(D,{path:"/main",component:g,onEditProfile:function(){d(!0)},onEditAvatar:function(){w(!0)},onAddPlace:function(){f(!0)},onCardClick:function(e){H(!0),V(e)},cards:n,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===te._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){c((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))},onDeleteClick:function(e){F(!0),ie(e)},signOut:function(){be(!1),localStorage.removeItem("jwt"),Ne({}),De.push("/sign-in")},to:"/sign-in",userEmail:ke}),Object(b.jsx)(T.b,{path:"/sign-in",children:Object(b.jsx)(P,{handleLogin:function(e,t){Z(!0),function(e,t){return fetch("".concat(B,"/signin"),{method:"POST",headers:q,body:JSON.stringify({email:e,password:t})}).then((function(e){return z(e)}))}(e,t).then((function(e){e.token&&(ve(Object(o.a)(Object(o.a)({},xe),{},{email:"",password:""})),be(!0),Ne(t),Ue(!1),De.push("/main"),setTimeout((function(){return Z(!1)}),3e3))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status)),ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),be(!1),le(!0),Z(!1),Ue(!1),Ne({})})),setTimeout((function(){return Z(!1)}),2e3)},isSubmitted:Y})}),Object(b.jsx)(T.b,{path:"/sign-up",children:Object(b.jsx)(L,{handleRegister:function(e,t,n){t===n?(Z(!0),function(e,t){return fetch("".concat(B,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return z(e)}))}(t,e).then((function(e){e?(ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),le(!0),fe(!0),Ue(!1),De.push("/sign-in")):(ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),le(!0),fe(!1),Ue(!1),Z(!1))})).catch((function(e){var t=String(e);console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(t.split(":")[1])),ve(Object(o.a)(Object(o.a)({},xe),{},{message:"".concat(t.split(":")[1],"!")})),le(!0),fe(!1),setTimeout((function(){return Z(!1)}),3e3)}))):(ve(Object(o.a)(Object(o.a)({},xe),{},{password:"",confirmPassword:"",message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"})),fe(!1),Ue(!1),le(!0)),setTimeout((function(){return Z(!1)}),2e3)},isSubmitted:Y})}),Object(b.jsx)(T.b,{path:"/",children:je?Object(b.jsx)(T.a,{to:"/main"}):Object(b.jsx)(T.a,{to:"/signin"})})]}),Object(b.jsx)(C,{isOpen:S,onClose:qe,onUpdateAvatar:function(e){Z(!0),p.updateAvatar(e).then((function(e){ne(Object.assign(te,{avatar:e.avatar})),w(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:Y}),Object(b.jsx)(k,{isOpen:l,onClose:qe,onUpdateUser:function(e){Z(!0),p.updateUserData(e).then((function(e){ne(e),d(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:Y}),Object(b.jsx)(N,{isOpen:h,onClose:qe,onAddPlace:function(e){Z(!0),p.addCard(e).then((function(e){c([e].concat(Object(r.a)(n))),f(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:Y}),Object(b.jsx)(x,{isOpen:R,data:Q,onClose:qe}),Object(b.jsx)(y,{isOpen:I,onClose:qe,isSubmitted:Y,deleteCard:function(e){Z(!0),p.deleteCard(e._id).then((function(){c(n.filter((function(t){return t._id!==e._id}))),F(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status," ").concat(e.statusText))}))},data:se}),Object(b.jsx)(A,{isOpen:ue,onClose:qe,name:"infoToolTip"})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(F,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.88146587.chunk.js.map