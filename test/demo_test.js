describe('demo_test', function() {
    describe('method1',function() {
        before (function () {
            console.log('start test')
        })
        after (function () {
            console.log('end test')
        })
        context('case1',function() {
            it('test1', function() {

            })
            it('test2', function() {
                
            })
        })
    })
})