package com.example.akaicode2022;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.CookieManager;
import android.webkit.CookieSyncManager;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        CookieSyncManager.createInstance(this);
        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);

        WebView webView = (WebView) findViewById(R.id.webview);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);



        final MainActivity activity = this;
        webView.setWebChromeClient(new WebChromeClient() {
            public void onProgressChanged(WebView view, int progress) {
                // Activities and WebViews measure progress with different scales.
                // The progress meter will automatically disappear when we reach 100%
                activity.setProgress(progress * 1000);
            }
        });

        webView.setWebViewClient(new WebViewClient() {
                 public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                     //Users will be notified in case there's an error (i.e. no internet connection)
                     Toast.makeText(activity, "Oh no! " + description, Toast.LENGTH_SHORT).show();
                 }

                 public void onPageFinished(WebView view, String url) {
                     CookieSyncManager.getInstance().sync();
                 }
             }
        );
        webView.loadUrl("http://192.168.137.1/GitHub/akaicode2022/_web/index.html");



    }
}