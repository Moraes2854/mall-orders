export interface SubOrder {
    id: string;
    orderId: string;
    addressId: string|null;
    userMerchantId: string;
    status: 'DELIVERED' | 'CLAIMED' | 'NOT-RECEIVED' | 'CANCELED';
    deliveryDate: Date|null;
    total: number;
    followCode: string; // ????
    createdAt: Date;
    updatedAt: Date;
}
// despues habria que agregar los datos de andreani
// Order hasMany SubOrders
// SubOrder hasMany orderItems