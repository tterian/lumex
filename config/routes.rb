Rails.application.routes.draw do

	root 						'page#home'
	
	get '/help'				=>	'page#help'
	get '/pricing'			=> 	'page#pricing'
	get '/growingYAY'		=> 	'page#grow'
	
end
