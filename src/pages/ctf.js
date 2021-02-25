import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

import './ctf.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="CTF" description="CTF問題をここにおきます．基本的に簡単です．" />
      <Meta title="CTF" />
      <h1>CTF</h1>
      <p>CTF問題をここにおきます．基本的に簡単です．</p>
      <p>このページはめんどくさくなってまだ出来てないです．問題は一問だけ置いてあります．</p>
      <div class="hidden_box">
        <label htmlFor="label1">[Web](100) 問題テスト</label>
        <input type="checkbox" id="label1" />
        <div class="hidden_show">
          <p>このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます...</p>
          <form>
            <input type="text" id="textForm" />
            <button id="button" onClick={flagSubmit()}>
              Submit!
            </button>
          </form>
          <input type="text" id="resultForm" />
        </div>
      </div>
      <div class="hidden_box">
        <label htmlFor="label2">テスト２</label>
        <input type="checkbox" id="label2" />
        <div class="hidden_show">
          <p>テスト</p>
        </div>
      </div>
      <Helmet>
        <script type="text/javascript">{`
        function flagSubmit(){
            // ボタンの要素を取得
            var button = document.getElementById("button");

            // ボタンをクリックした時の処理
            button.addEventListener("click", function(e) {
                e.preventDefault();
                // 入力フォームの値を取得
                var textForm = document.getElementById("textForm").value;
                // 取得した値を別の入力フォームに表示
                var resultForm = document.getElementById("resultForm");
                resultForm.value = textForm;
            });
        }`}</script>
      </Helmet>
    </Layout>
  )
}
function flagSubmit() {
    // ボタンの要素を取得
    var button = document.getElementById("button");

    // ボタンをクリックした時の処理
    button.addEventListener("click", function(e) {
        e.preventDefault();
        // 入力フォームの値を取得
        var textForm = document.getElementById("textForm").value;
        // 取得した値を別の入力フォームに表示
        var resultForm = document.getElementById("resultForm");
        resultForm.value = textForm;
    });
}

export default SiteIndex
