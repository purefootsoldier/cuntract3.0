package com.Cuntract.Cuntract_Spring.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.time.DateTimeException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    public static final String SECRET = "Bbz8l9aJVgVPoIyRdse9IyujQADLYlIJSwAFTwKMavBrcTnyL5lIJQFR1BLZ2p0kdJNUfqHKVIO3nwGP+VuDjSdbizQaxUB0ayhBBhXu6AqadiWgwL5tWDXAuySl4hkhUOWaPcFlmzodUUu3CqX1yKyHXM31N1JXmvhKQINRYXf6FLVP8RI18ScrRjDtZz2/c+wDjvVxQ8lTaBrWdl5YUTJt18KiblCV+gJ1270ZASUbKan84iH/8x7Ue/9+cT9wRPBkZkYRI6Jn0I43RptrJ71Eeien4Nrni6y+fde6gVWx7Bb7dxRH1zsEe8XfIuBFrPo6aMYj7c5WicA7rd1hwgWZNsQ2mZHcdEQXRNTaLAg=\n";

    private String createToken(Map<String, Object> claims, String userName) {
        return Jwts.builder()
                .claims(claims)
                .subject(userName)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
                .signWith(getSignkey(), SignatureAlgorithm.HS256).compact();
    }
    private Key getSignkey() {
        byte[] keybytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keybytes);
    }
    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, username);
    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return  claimsResolver.apply(claims);
    }

    public String extractUsername(String token) {
        return  extractClaim(token, Claims::getSubject);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .setSigningKey(getSignkey())
                .build()
                .parseClaimsJws(token)
                .getPayload();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public  Boolean validateToken(String token, UserDetails userDetails) {
        final  String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
