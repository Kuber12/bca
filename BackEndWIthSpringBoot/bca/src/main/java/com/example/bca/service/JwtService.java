package com.example.bca.service;

import com.example.bca.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.xml.crypto.Data;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {
    private final String secretkey="4bb6d1dfbafb64a681139d1586b6f1160d18159afd57c8c79136d7490630407c";

    public boolean isValid(String token, UserDetails user){
        String username = extractUsername(token);
        return username.equals(user.getUsername()) && !isTokenExpired(token); //ram == ram ->true
    }
    public  boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token){
        return extractClaim(token,Claims::getExpiration);
    }

    public String extractUsername(String token){
        return extractClaim(token,Claims::getSubject); //user.getUsername();
    }

    public <T> T extractClaim(String token, Function<Claims,T> resolver){
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }
    //it takes all the data from generateToken()>token ->username,issued date, expiration date
    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String generateToken(User user){
       String token = Jwts
               .builder()
               .subject(user.getUsername())
               .issuedAt(new Date(System.currentTimeMillis()))
               .expiration(new Date(System.currentTimeMillis()+24*60*60*1000))
               .signWith(getSigninKey())
               .compact();
//        System.out.println(token);
       return token;
   }

    private SecretKey getSigninKey() {
       byte[] keyBytes = Decoders.BASE64URL.decode(secretkey);
       return Keys.hmacShaKeyFor(keyBytes);
    }

}
