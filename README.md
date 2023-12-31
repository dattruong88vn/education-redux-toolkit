# REDUX TOOLKIT

#### Redux Toolkit là gì?

Redux là thư viện có nhiệm vụ quản lý State của Javascript Application.

Redux toolkit là một bộ công cụ chính thức dùng để develop Redux một cách hiệu quả.
Nó cũng được xem là một cách tiêu chuẩn để viết code Redux, tăng trải nghiệm cho developer.

#### Tại sao cần Redux Toolkit?

Redux là một thư viện rất hữu ích tuy nhiên nó vẫn có một vài thiếu sót (shortcomings)

- Cấu hình Redux khá phức tạp
- Ngoài Redux, cần cài đặt thêm nhiều thư viện khác để có thể khiến Redux phát huy hết chức năng.
- Redux sử dụng khá nhiều boilerplate code: phải lặp lại các đoạn code tương đồng nhau khi thêm các chức năng hoặc reducer (code theo mẫu sẵn --> ý nói đến action hay reducer...).

Redux Toolkit có chức năng trừu tượng hoá Redux, nó ẩn đi những phần phức tạp của Redux giúp cho trải nghiệm khi phát triển ứng dụng tốt hơn.

#### Redux Toolkit và React

Redux và RTK không phụ thuộc vào các thư viện UI, nó có thể làm việc với React, Angular, Vue hoặc Vanilla Javascript.

Đối với React, RTK cần kết hợp với thư viện React-Redux để có thể connect với nhau.

#### Redux Pattern

Đã được mô tả kỹ trong repository education-redux.

###### bindActionCreators

Được sử dụng để tránh lặp đi lặp lại thao tác dispatch action.
Tham số (2 tham số):

- Tham số thứ nhất: là 1 object, key là tên actionCreator sau khi được bind, value là các actionCreator.
- Tham số thứ hai: function dispatch của store (được return từ function createStore).

Giá trị trả về:

- Object với các method chính là các actionCreate đã được bind

```
// Before
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeRestock(3));

// After
const { bindActionCreators } = require('redux');
...
const actions = bindActionCreators({ cakeOrder, cakeRestock }, store.dispatch);
actions.cakeOrder();
actions.cakeOrder();
actions.cakeOrder();
actions.cakeRestock(3);
```

###### Immer library

Giúp mutate nested object một cách dễ dàng hơn.

#### Redux và những thiếu sót

- Cần khá nhiều code mẫu lặp đi lặp lại. Khi thêm 1 tính năng, cần phải define action, action creator, action object và switch case bên trong reducer.
- Khá nhiều thư viện cần phải cài đặt thêm để kết hợp với redux: redux-thunk, redux-devtool, immer...
- Cần phải nâng cao trải nghiệm của developer khi làm việc với redux --> redux toolkit

#### Extra Reducers

Đối với REDUX, trường hợp combine nhiều reducers nếu có 1 action được dispatch thì tất cả các reducer đều lắng nghe được action này.

Ví dụ, action ORDERED_CAKE được dispatch thì cả cakeReducer và iceCreamReducer đều lắng nghe, tuy nhiên chỉ có cakeReducer xử lý còn iceCreamReducer sẽ ignore.

Đối với RTK thì trường hợp trên không xảy ra, reducer chỉ lắng nghe được những action nằm chung slice với reducer đó.

Muốn lắng nghe được action từ một slice khác thì phải khai báo thông qua extraReducers.
