package com.app.model.order;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class CompositeOrderProductKey implements Serializable {
    private int orderId;
    private int productId;

    public CompositeOrderProductKey(int orderId, int productId){
        this.orderId   =orderId;
        this.productId =productId;
    }
}
