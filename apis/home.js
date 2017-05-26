module.exports.home = function (req, res){
    res.render('index', {
        title: 'BASIC-API', 
        apis :[
        '/                  ->      Home api        ->      GET Method ',
        '/users             ->      Users api       ->      GET Method ',
        '/users/:id         ->      Users api       ->      GET Method ',
        '/createUser        ->      createUser api  ->      POST Method',
        '/updateUser/:id    ->      updateUser api  ->      PUT Method',
        '/deleteUser/:id    ->      deleteUser api  ->      DELETE Method',
        '/cluster           ->      cluster api     ->      GET Method',

        '/cloudadmin        ->      cloudadmin api  ->      GET Method',
        '/cloudadmin        ->      cloudadmin api  ->      POST Method',
        '/cloudadmin/:id    ->      cloudadmin api  ->      GET Method',
        '/cloudadmin/:id    ->      cloudadmin api  ->      PUT Method',
        '/cloudadmin/:id    ->      cloudadmin api  ->      DELETE Method',
        
        '/reseller          ->      reseller api    ->      GET Method',
        '/reseller          ->      reseller api    ->      POST Method',
        '/reseller/:id      ->      reseller api    ->      GET Method',
        '/reseller/:id      ->      reseller api    ->      PUT Method',
        '/reseller/:id      ->      reseller api    ->      DELETE Method',

        '/role          ->      role api    ->      GET Method',
        '/role          ->      role api    ->      POST Method',
        '/role/:id      ->      role api    ->      GET Method',
        '/role/:id      ->      role api    ->      PUT Method',
        '/role/:id      ->      role api    ->      DELETE Method',

        '/site          ->      site api    ->      GET Method',
        '/site          ->      site api    ->      POST Method',
        '/site/:id      ->      site api    ->      GET Method',
        '/site/:id      ->      site api    ->      PUT Method',
        '/site/:id      ->      site api    ->      DELETE Method',

        '/tenant          ->      tenant api    ->      GET Method',
        '/tenant          ->      tenant api    ->      POST Method',
        '/tenant/:id      ->      tenant api    ->      GET Method',
        '/tenant/:id      ->      tenant api    ->      PUT Method',
        '/tenant/:id      ->      tenant api    ->      DELETE Method',
        ]
    });
}