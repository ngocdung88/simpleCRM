
import Orders from './order.js';

Orders.methods = {};


// Manual form specific update method that knows how to unpack the single
// object we get from autoform.
Orders.methods.upsert = new ValidatedMethod({

    // register the name
    name: 'Orders.methods.upsert',

    validate(args) {
        console.log("validating order", args);

        var schemaContext = Schemas.OrderSchema.namedContext("OrderForm");
        schemaContext.validate(args.data);

        console.log("validation succeeded");
    },


    // the actual database updating part
    // validate has already been run at this point
    run(args)
    {
        console.log("run");
        console.log("args", args);
        return Orders.upsert(args.orderId, {$set: args.data});
    }
});
