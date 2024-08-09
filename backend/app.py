from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({
        'message': 'Hello from the backend!',
        'data1': 'Brundha',
        'data2': 'Swapnil',
        'data3': 'Manuja',
        'data4': 'Sathana',
        'data5': 'Ishita',  
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
