/**
 * @author：puncheung_lai
 * @see: des加密方案
 */
define(function(){var g={};var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var y="abcdefghijklmnopqrstuvwxyz";var x="1234567890";g.getEncResult=function(D){var C=d(D,A,y,x);return C};g.getDecResult=function(D){var C=l(D,A,y,x);return C};function d(Y,R,C,F){var I=Y.length;var J="";var V,S,P,Z,H,K;if(R!=null&&R!=""){V=p(R);Z=V.length}if(C!=null&&C!=""){S=p(C);H=S.length}if(F!=null&&F!=""){P=p(F);K=P.length}if(I>0){if(I<4){var W=a(Y);var G;if(R!=null&&R!=""&&C!=null&&C!=""&&F!=null&&F!=""){var U;var N,M,L;U=W;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}for(L=0;L<K;L++){U=e(U,P[L])}G=U}else{if(R!=null&&R!=""&&C!=null&&C!=""){var U;var N,M;U=W;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}G=U}else{if(R!=null&&R!=""){var U;var N=0;U=W;for(N=0;N<Z;N++){U=e(U,V[N])}G=U}}}J=f(G)}else{var Q=parseInt(I/4);var O=I%4;var T=0;for(T=0;T<Q;T++){var E=Y.substring(T*4+0,T*4+4);var X=a(E);var G;if(R!=null&&R!=""&&C!=null&&C!=""&&F!=null&&F!=""){var U;var N,M,L;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}for(L=0;L<K;L++){U=e(U,P[L])}G=U}else{if(R!=null&&R!=""&&C!=null&&C!=""){var U;var N,M;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}G=U}else{if(R!=null&&R!=""){var U;var N;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}G=U}}}J+=f(G)}if(O>0){var D=Y.substring(Q*4+0,I);var X=a(D);var G;if(R!=null&&R!=""&&C!=null&&C!=""&&F!=null&&F!=""){var U;var N,M,L;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}for(L=0;L<K;L++){U=e(U,P[L])}G=U}else{if(R!=null&&R!=""&&C!=null&&C!=""){var U;var N,M;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}for(M=0;M<H;M++){U=e(U,S[M])}G=U}else{if(R!=null&&R!=""){var U;var N;U=X;for(N=0;N<Z;N++){U=e(U,V[N])}G=U}}}J+=f(G)}}}return J}function l(X,Q,C,E){var G=X.length;var H="";var V,S,N,Y,F,J;if(Q!=null&&Q!=""){V=p(Q);Y=V.length}if(C!=null&&C!=""){S=p(C);F=S.length}if(E!=null&&E!=""){N=p(E);J=N.length}var P=parseInt(G/16);var U=0;for(U=0;U<P;U++){var D=X.substring(U*16+0,U*16+16);var I=c(D);var W=new Array(64);var R=0;for(R=0;R<64;R++){W[R]=parseInt(I.substring(R,R+1))}var O;if(Q!=null&&Q!=""&&C!=null&&C!=""&&E!=null&&E!=""){var T;var M,L,K;T=W;for(M=J-1;M>=0;M--){T=o(T,N[M])}for(L=F-1;L>=0;L--){T=o(T,S[L])}for(K=Y-1;K>=0;K--){T=o(T,V[K])}O=T}else{if(Q!=null&&Q!=""&&C!=null&&C!=""){var T;var M,L,K;T=W;for(M=F-1;M>=0;M--){T=o(T,S[M])}for(L=Y-1;L>=0;L--){T=o(T,V[L])}O=T}else{if(Q!=null&&Q!=""){var T;var M,L,K;T=W;for(M=Y-1;M>=0;M--){T=o(T,V[M])}O=T}}}H+=t(O)}return H}function p(F){var C=new Array();var E=F.length;var G=parseInt(E/4);var H=E%4;var D=0;for(D=0;D<G;D++){C[D]=a(F.substring(D*4+0,D*4+4))}if(H>0){C[D]=a(F.substring(D*4+0,E))}return C}function a(K){var C=K.length;var L=new Array(64);if(C<4){var I=0,H=0,E=0,D=0;for(I=0;I<C;I++){var G=K.charCodeAt(I);for(H=0;H<16;H++){var J=1,F=0;for(F=15;F>H;F--){J*=2}L[16*I+H]=parseInt(G/J)%2}}for(E=C;E<4;E++){var G=0;for(D=0;D<16;D++){var J=1,F=0;for(F=15;F>D;F--){J*=2}L[16*E+D]=parseInt(G/J)%2}}}else{for(I=0;I<4;I++){var G=K.charCodeAt(I);for(H=0;H<16;H++){var J=1;for(F=15;F>H;F--){J*=2}L[16*I+H]=parseInt(G/J)%2}}}return L}function b(D){var C;switch(D){case"0000":C="0";break;case"0001":C="1";break;case"0010":C="2";break;case"0011":C="3";break;case"0100":C="4";break;case"0101":C="5";break;case"0110":C="6";break;case"0111":C="7";break;case"1000":C="8";break;case"1001":C="9";break;case"1010":C="A";break;case"1011":C="B";break;case"1100":C="C";break;case"1101":C="D";break;case"1110":C="E";break;case"1111":C="F";break}return C}function h(C){var D;switch(C){case"0":D="0000";break;case"1":D="0001";break;case"2":D="0010";break;case"3":D="0011";break;case"4":D="0100";break;case"5":D="0101";break;case"6":D="0110";break;case"7":D="0111";break;case"8":D="1000";break;case"9":D="1001";break;case"A":D="1010";break;case"B":D="1011";break;case"C":D="1100";break;case"D":D="1101";break;case"E":D="1110";break;case"F":D="1111";break}return D}function t(F){var E="";for(i=0;i<4;i++){var D=0;for(j=0;j<16;j++){var C=1;for(m=15;m>j;m--){C*=2}D+=F[16*i+j]*C}if(D!=0){E+=String.fromCharCode(D)}}return E}function f(E){var D="";for(i=0;i<16;i++){var C="";for(j=0;j<4;j++){C+=E[i*4+j]}D+=b(C)}return D}function c(C){var D="";for(i=0;i<16;i++){D+=h(C.substring(i,i+1))}return D}function e(D,N){var Q=u(N);var M=z(D);var E=new Array(32);var P=new Array(32);var I=new Array(32);var L=0,K=0,J=0,H=0,G=0;for(J=0;J<32;J++){E[J]=M[J];P[J]=M[32+J]}for(L=0;L<16;L++){for(K=0;K<32;K++){I[K]=E[K];E[K]=P[K]}var O=new Array(48);for(H=0;H<48;H++){O[H]=Q[L][H]}var C=s(r(q(s(v(P),O))),I);for(G=0;G<32;G++){P[G]=C[G]}}var F=new Array(64);for(L=0;L<32;L++){F[L]=P[L];F[32+L]=E[L]}return w(F)}function o(D,N){var Q=u(N);var M=z(D);var E=new Array(32);var P=new Array(32);var I=new Array(32);var L=0,K=0,J=0,H=0,G=0;for(J=0;J<32;J++){E[J]=M[J];P[J]=M[32+J]}for(L=15;L>=0;L--){for(K=0;K<32;K++){I[K]=E[K];E[K]=P[K]}var O=new Array(48);for(H=0;H<48;H++){O[H]=Q[L][H]}var C=s(r(q(s(v(P),O))),I);for(G=0;G<32;G++){P[G]=C[G]}}var F=new Array(64);for(L=0;L<32;L++){F[L]=P[L];F[32+L]=E[L]}return w(F)}function z(D){var C=new Array(64);
for(i=0,m=1,n=0;i<4;i++,m+=2,n+=2){for(j=7,k=0;j>=0;j--,k++){C[i*8+k]=D[j*8+m];C[i*8+k+32]=D[j*8+n]}}return C}function v(C){var D=new Array(48);for(i=0;i<8;i++){if(i==0){D[i*6+0]=C[31]}else{D[i*6+0]=C[i*4-1]}D[i*6+1]=C[i*4+0];D[i*6+2]=C[i*4+1];D[i*6+3]=C[i*4+2];D[i*6+4]=C[i*4+3];if(i==7){D[i*6+5]=C[0]}else{D[i*6+5]=C[i*4+4]}}return D}function s(E,D){var C=new Array(E.length);for(i=0;i<E.length;i++){C[i]=E[i]^D[i]}return C}function q(E){var C=new Array(32);var G="";var O=[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]];var N=[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]];var M=[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]];var L=[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]];var K=[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]];var J=[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]];var I=[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]];var H=[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]];for(m=0;m<8;m++){var F=0,D=0;F=E[m*6+0]*2+E[m*6+5];D=E[m*6+1]*2*2*2+E[m*6+2]*2*2+E[m*6+3]*2+E[m*6+4];switch(m){case 0:G=B(O[F][D]);break;case 1:G=B(N[F][D]);break;case 2:G=B(M[F][D]);break;case 3:G=B(L[F][D]);break;case 4:G=B(K[F][D]);break;case 5:G=B(J[F][D]);break;case 6:G=B(I[F][D]);break;case 7:G=B(H[F][D]);break}C[m*4+0]=parseInt(G.substring(0,1));C[m*4+1]=parseInt(G.substring(1,2));C[m*4+2]=parseInt(G.substring(2,3));C[m*4+3]=parseInt(G.substring(3,4))}return C}function r(D){var C=new Array(32);C[0]=D[15];C[1]=D[6];C[2]=D[19];C[3]=D[20];C[4]=D[28];C[5]=D[11];C[6]=D[27];C[7]=D[16];C[8]=D[0];C[9]=D[14];C[10]=D[22];C[11]=D[25];C[12]=D[4];C[13]=D[17];C[14]=D[30];C[15]=D[9];C[16]=D[1];C[17]=D[7];C[18]=D[23];C[19]=D[13];C[20]=D[31];C[21]=D[26];C[22]=D[2];C[23]=D[8];C[24]=D[18];C[25]=D[12];C[26]=D[29];C[27]=D[5];C[28]=D[21];C[29]=D[10];C[30]=D[3];C[31]=D[24];return C}function w(C){var D=new Array(64);D[0]=C[39];D[1]=C[7];D[2]=C[47];D[3]=C[15];D[4]=C[55];D[5]=C[23];D[6]=C[63];D[7]=C[31];D[8]=C[38];D[9]=C[6];D[10]=C[46];D[11]=C[14];D[12]=C[54];D[13]=C[22];D[14]=C[62];D[15]=C[30];D[16]=C[37];D[17]=C[5];D[18]=C[45];D[19]=C[13];D[20]=C[53];D[21]=C[21];D[22]=C[61];D[23]=C[29];D[24]=C[36];D[25]=C[4];D[26]=C[44];D[27]=C[12];D[28]=C[52];D[29]=C[20];D[30]=C[60];D[31]=C[28];D[32]=C[35];D[33]=C[3];D[34]=C[43];D[35]=C[11];D[36]=C[51];D[37]=C[19];D[38]=C[59];D[39]=C[27];D[40]=C[34];D[41]=C[2];D[42]=C[42];D[43]=C[10];D[44]=C[50];D[45]=C[18];D[46]=C[58];D[47]=C[26];D[48]=C[33];D[49]=C[1];D[50]=C[41];D[51]=C[9];D[52]=C[49];D[53]=C[17];D[54]=C[57];D[55]=C[25];D[56]=C[32];D[57]=C[0];D[58]=C[40];D[59]=C[8];D[60]=C[48];D[61]=C[16];D[62]=C[56];D[63]=C[24];return D}function B(C){var D="";switch(C){case 0:D="0000";break;case 1:D="0001";break;case 2:D="0010";break;case 3:D="0011";break;case 4:D="0100";break;case 5:D="0101";break;case 6:D="0110";break;case 7:D="0111";break;case 8:D="1000";break;case 9:D="1001";break;case 10:D="1010";break;case 11:D="1011";break;case 12:D="1100";break;case 13:D="1101";break;case 14:D="1110";break;case 15:D="1111";break}return D}function u(E){var G=new Array(56);var H=new Array();H[0]=new Array();H[1]=new Array();H[2]=new Array();H[3]=new Array();H[4]=new Array();H[5]=new Array();H[6]=new Array();H[7]=new Array();H[8]=new Array();H[9]=new Array();H[10]=new Array();H[11]=new Array();H[12]=new Array();H[13]=new Array();H[14]=new Array();H[15]=new Array();var C=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];for(F=0;F<7;F++){for(j=0,k=7;j<8;j++,k--){G[F*8+j]=E[8*k+F]}}var F=0;for(F=0;F<16;F++){var J=0;var D=0;for(j=0;j<C[F];j++){J=G[0];D=G[28];for(k=0;k<27;k++){G[k]=G[k+1];G[28+k]=G[29+k]}G[27]=J;G[55]=D}var I=new Array(48);I[0]=G[13];I[1]=G[16];I[2]=G[10];I[3]=G[23];I[4]=G[0];I[5]=G[4];I[6]=G[2];I[7]=G[27];I[8]=G[14];I[9]=G[5];I[10]=G[20];I[11]=G[9];I[12]=G[22];I[13]=G[18];I[14]=G[11];I[15]=G[3];I[16]=G[25];I[17]=G[7];I[18]=G[15];I[19]=G[6];I[20]=G[26];I[21]=G[19];I[22]=G[12];I[23]=G[1];I[24]=G[40];I[25]=G[51];I[26]=G[30];I[27]=G[36];I[28]=G[46];I[29]=G[54];I[30]=G[29];I[31]=G[39];I[32]=G[50];I[33]=G[44];I[34]=G[32];I[35]=G[47];I[36]=G[43];I[37]=G[48];I[38]=G[38];I[39]=G[55];I[40]=G[33];I[41]=G[52];I[42]=G[45];I[43]=G[41];I[44]=G[49];I[45]=G[35];
I[46]=G[28];I[47]=G[31];switch(F){case 0:for(m=0;m<48;m++){H[0][m]=I[m]}break;case 1:for(m=0;m<48;m++){H[1][m]=I[m]}break;case 2:for(m=0;m<48;m++){H[2][m]=I[m]}break;case 3:for(m=0;m<48;m++){H[3][m]=I[m]}break;case 4:for(m=0;m<48;m++){H[4][m]=I[m]}break;case 5:for(m=0;m<48;m++){H[5][m]=I[m]}break;case 6:for(m=0;m<48;m++){H[6][m]=I[m]}break;case 7:for(m=0;m<48;m++){H[7][m]=I[m]}break;case 8:for(m=0;m<48;m++){H[8][m]=I[m]}break;case 9:for(m=0;m<48;m++){H[9][m]=I[m]}break;case 10:for(m=0;m<48;m++){H[10][m]=I[m]}break;case 11:for(m=0;m<48;m++){H[11][m]=I[m]}break;case 12:for(m=0;m<48;m++){H[12][m]=I[m]}break;case 13:for(m=0;m<48;m++){H[13][m]=I[m]}break;case 14:for(m=0;m<48;m++){H[14][m]=I[m]}break;case 15:for(m=0;m<48;m++){H[15][m]=I[m]}break}}return H}return g});
