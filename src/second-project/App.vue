<template>
  <div class="container">
    <appQuoteCounter :quotesCounter="quotesCounter"></appQuoteCounter>
    <br>
    <br>
    <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
    <br>
    <br>
    <app-quote-grid :quotes="quotes"
                    @quoteDeleted="quoteDeleted"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteCounter from "./second-project/QuotesCounter";
import QuoteGrid from "./second-project/QuoteGrid";
import NewQuote from "./second-project/NewQuote";

export default {
  data: function() {
    return {
      quotesCounter: 0,
      quotes: []
    };
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotesCounter == 10) {
        alert("Quotes are full\r\nRemove some quotes before adding new quote");
        return;
      }
      this.quotes.push(quote);
      this.quotesCounter++;
    },
    quoteDeleted(index) {
      this.quotes.splice(index, 1);
      this.quotesCounter--;
    }
  },
  components: {
    appQuoteCounter: QuoteCounter,
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
};
</script>

<style>
</style>