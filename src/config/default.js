module.exports = {
    "logLevel": "debug",
    "exchange": "binance",
    "quote": "BTC",
    "symbols": ["SALTBTC"],
    "default": {
      "bag": {
          "quantity": null,
          "cost": null
      },
      "frequency": 5000,
      "indicator": {
          "kline": {
            "interval": "1m"
          },
          "bb": {
            "period": 20,
            "stdDev": 2
          },
          "macd": {
            "fastPeriod": 12,
            "slowPeriod": 26,
            "signalPeriod": 9
          },
          "rsi": {
            "period": 14
          },
          "ema": {
            "fastPeriod": 9,
            "slowPeriod": 26
          }
      },
      "strategy": {
          "buy": {
            "minCost": 0.002,
            "maxCost": 0.005,
            "maxBuySpread": 0.02,
            "trail": 0.003,
            "bb": {
                "enabled": false,
                "reference": "lowbb",
                "trigger": -0.003
            },
            "macd": {
                "enabled": false,
                "trigger": -0.003
            },
            "rsi": {
                "enabled": false,
                "trigger": 34
            },
            "emaspread": {
                "enabled": false,
                "trigger": -0.003
            },
            "emafast": {
                "enabled": true,
                "trigger": -0.016
            },
            "emaslow": {
                "enabled": false,
                "trigger": -0.016
            },
            "loss": {
                "trigger": -7
            }
          },
          "sell": {
            "minCost": 0.002,
            "trail": 0.003,
            "gain": {
                "enabled": true,
                "target": 1.02
            }
          },
          "dca": {
            "enabled": false,
            "levels": [-0.035, -0.045, -0.045, -0.045, -0.055, -0.055]
          }
      }
    }
}